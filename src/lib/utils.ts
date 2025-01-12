import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function storageSize(size: number) {
    if (size < 1024) {
        return `${size} B`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
    } else if (size < 1024 * 1024 * 1024) {
        return `${(size / 1024 / 1024).toFixed(2)} MB`;
    } else {
        return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
    }
}

export function smoothScroll(targetId: string, offset: number = 60) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }
}

export function getAppUrl() {
    if (process.env.NODE_ENV !== 'production') {
        return 'http://localhost:3000';
    }

    return process.env.BETTER_AUTH_BASE_URL;
}
