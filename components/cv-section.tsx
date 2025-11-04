"use client"

import { Download, Eye } from "lucide-react"

export default function CVSection() {
    const handleDownloadCV = () => {

        fetch("./Mayowa Adebanjo CV.pdf")
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "Mayowa Adebanjo CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            })
            .catch(() => alert("Could not download CV. Please try again."));
    }

    const handleViewCV = () => {
        window.open("./Mayowa Adebanjo CV.pdf", "_blank")
    }

    return (
        <div className="inline-flex gap-3 items-center">
            {/* <button
                onClick={handleViewCV}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                aria-label="View CV"
            >
                <Eye size={18} />
                <span className="text-sm font-medium">View CV</span>
            </button> */}
            <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 hover:bg-primary/30 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Download CV"
            >
                <Download size={18} />
                <span className="text-sm font-medium">Download CV</span>
            </button>
        </div>
    )
}
