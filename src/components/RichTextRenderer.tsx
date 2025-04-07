// components/RichTextRenderer.tsx
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import Image from 'next/image';

// Helper function to clean image URLs
function getContentfulImageUrl(imageUrl: string) {
    if (!imageUrl) return '';

    // If it already has https://, return as is
    if (imageUrl.startsWith('https://')) return imageUrl;

    // If it starts with //, add https: in front
    if (imageUrl.startsWith('//')) return `https:${imageUrl}`;

    // If it starts with a single /, remove it and add https://
    return `https://${imageUrl.replace(/^\//, '')}`;
}

// Types
interface RichTextRendererProps {
    content: any; // The rich text content from Contentful
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
    // If content is empty, return null
    if (!content) return null;

    // Configure the options for rendering
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
            [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
            [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
            [MARKS.CODE]: (text: any) => <code className="bg-gray-100 p-1 rounded">{text}</code>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-4">{children}</p>,
            [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
            [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
            [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
            [BLOCKS.HEADING_4]: (node: any, children: any) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
            [BLOCKS.HEADING_5]: (node: any, children: any) => <h5 className="text-base font-bold mb-1">{children}</h5>,
            [BLOCKS.HEADING_6]: (node: any, children: any) => <h6 className="text-sm font-bold mb-1">{children}</h6>,
            [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li className="mb-1">{children}</li>,
            [BLOCKS.QUOTE]: (node: any, children: any) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-4 italic">
                    {children}
                </blockquote>
            ),
            [BLOCKS.HR]: () => <hr className="my-6" />,

            // Handle embedded assets (images)
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const { title, description, file } = node.data.target.fields;
                const url = getContentfulImageUrl(file.url);
                const mimeType = file.contentType;

                // Handle images
                if (mimeType.startsWith('image/')) {
                    return (
                        <div className="my-4">
                            <div className="relative w-full h-auto max-h-96">
                                <Image
                                    src={url}
                                    alt={description || title || 'Embedded asset'}
                                    width={file.details.image.width}
                                    height={file.details.image.height}
                                    className="object-contain mx-auto"
                                />
                            </div>
                            {title && <p className="text-center text-gray-500 text-sm mt-1">{title}</p>}
                        </div>
                    );
                }

                // Handle other file types with a download link
                return (
                    <div className="my-4 p-4 border rounded bg-gray-50">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            📎 {title || 'Download file'}
                        </a>
                        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
                    </div>
                );
            },

            // Handle hyperlinks
            [INLINES.HYPERLINK]: (node: any, children: any) => {
                const { uri } = node.data;

                // Check if it's an internal link (to your website)
                const isInternalLink = uri.startsWith('/') || uri.includes('your-domain.com');

                if (isInternalLink) {
                    return (
                        <Link href={uri} className="text-blue-600 hover:underline">
                            {children}
                        </Link>
                    );
                }

                // External link
                return (
                    <a
                        href={uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        {children}
                    </a>
                );
            },

            // Handle embedded entries (if needed)
            [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
                // You can customize this based on your embedded entry types
                const { fields } = node.data.target;

                return (
                    <div className="my-4 p-4 border rounded">
                        <h4 className="font-bold">{fields.title}</h4>
                        {fields.description && <p>{fields.description}</p>}
                    </div>
                );
            },
        },
    };

    return (
        <div className="rich-text">
            {/*// @ts-ignore*/}
            {documentToHtmlString(content, options)}
        </div>
    );
}