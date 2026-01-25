import { useState, useCallback, useRef } from 'react';

/**
 * Rate Limiting Hook
 * Prevents spam and abuse by limiting form submissions
 * 
 * @param maxAttempts - Maximum number of attempts allowed
 * @param windowMs - Time window in milliseconds
 * @returns Object with canSubmit flag and checkRateLimit function
 */
export function useRateLimit(maxAttempts: number = 3, windowMs: number = 60000) {
    const [attempts, setAttempts] = useState<number[]>([]);
    const [isBlocked, setIsBlocked] = useState(false);
    const blockTimeoutRef = useRef<NodeJS.Timeout>();

    const checkRateLimit = useCallback((): { allowed: boolean; remainingAttempts: number; resetTime?: number } => {
        const now = Date.now();

        // Remove attempts outside the time window
        const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);

        // Check if rate limit exceeded
        if (recentAttempts.length >= maxAttempts) {
            const oldestAttempt = Math.min(...recentAttempts);
            const resetTime = oldestAttempt + windowMs;

            if (!isBlocked) {
                setIsBlocked(true);

                // Auto-unblock after window expires
                const timeUntilReset = resetTime - now;
                if (blockTimeoutRef.current) {
                    clearTimeout(blockTimeoutRef.current);
                }
                blockTimeoutRef.current = setTimeout(() => {
                    setIsBlocked(false);
                    setAttempts([]);
                }, timeUntilReset);
            }

            return {
                allowed: false,
                remainingAttempts: 0,
                resetTime
            };
        }

        // Update attempts
        setAttempts([...recentAttempts, now]);

        return {
            allowed: true,
            remainingAttempts: maxAttempts - recentAttempts.length - 1
        };
    }, [attempts, maxAttempts, windowMs, isBlocked]);

    const reset = useCallback(() => {
        setAttempts([]);
        setIsBlocked(false);
        if (blockTimeoutRef.current) {
            clearTimeout(blockTimeoutRef.current);
        }
    }, []);

    return {
        checkRateLimit,
        reset,
        isBlocked
    };
}

/**
 * Format time remaining for user display
 */
export function formatTimeRemaining(resetTime: number): string {
    const now = Date.now();
    const remaining = Math.ceil((resetTime - now) / 1000);

    if (remaining <= 0) return '0 seconds';

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
    }

    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
}
