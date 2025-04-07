import { contentfulClient as client } from "@/lib/contentful";
import { Document } from "@contentful/rich-text-types";

interface File {
    url: string;
    details: {
        image: {
            height: number;
            width: number;
        };
        size: number;
    }
}

export interface Project {
    projectTitle: string;
    shortDescription: string;
    projectDescription: Document;
    tagline: string;
    thumbnail: {
        fields: {
            file: File
        }
    };
    images: {
        fields: {}
    };
    tags: string[];
    slug: string;
}

export interface Setting {
    key: string;
    value: string;
    image: {
        fields: {
            file: File
        }
    }
}

// Function to get all entries of a specific content type
export async function getEntries<T>(contentType: string) {
    const entries = await client.getEntries({
        content_type: contentType,
    });

    return entries.items.map(item => item.fields) as T[];
}

// Function to get a single entry by slug
export async function getEntryBySlug<T>(contentType: string, slug: string) {
    const entries = await client.getEntries({
        content_type: contentType,
        'fields.slug': slug,
        limit: 1,
    });

    return entries.items[0]?.fields as T;
}


// Function to get the latest entries
export async function getLatestEntries<T>(contentType: string, limit: number = 5) {
    const entries = await client.getEntries({
        content_type: contentType,
        // @ts-ignore
        order: '-sys.createdAt',
        limit,
    });

    return entries.items.map(item => item.fields) as T[];
}