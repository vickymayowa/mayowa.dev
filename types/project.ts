export interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    github_link: string
    live_url: string
    demo?: string | null
    created_at?: string
    features?: string[]
    deployment?: string
}
