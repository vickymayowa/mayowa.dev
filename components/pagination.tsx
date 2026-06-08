"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    ariaLabel?: string
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    ariaLabel = "Pagination",
}: PaginationProps) {
    return (
        <nav className="flex items-center justify-center gap-2 mt-8" aria-label={ariaLabel}>
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-border bg-card hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Go to previous page"
            >
                <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? "page" : undefined}
                        className={`px-3 py-1 rounded-lg transition-all ${currentPage === page ? "bg-primary text-white" : "border border-border bg-card hover:border-primary"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-border bg-card hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Go to next page"
            >
                <ChevronRight size={18} aria-hidden="true" />
            </button>
        </nav>
    )
}
