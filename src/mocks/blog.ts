export const blog = [
    {
        id: 1,
        title: 'The Context Outside the Code',
        description:
            'How you can quickly add external context to language model conversations with Zed extensions built using the new Model Context Protocol.',
        published: new Date(),
        imageUrl: 'https://picsum.photos/seed/1/300/120',
        type: 'featured',
        author: {
            name: 'John Doe',
            imageUrl: 'https://picsum.photos/seed/1/40/40',
        },
        content: `
            <p>
                The Model Context Protocol is a new feature that allows you to add external context to language model conversations. This is a powerful tool that can help you quickly add context to your conversations, making them more engaging and relevant.
            </p>
            <p>
                In this post, we’ll take a look at how you can use the Model Context Protocol to add external context to your conversations. We’ll cover the basics of the protocol, how to create your own context extensions, and how to use them in your conversations.
            </p>
            <p>
                Let’s get started!
            </p>
        `,
    },
];

export type Type = 'featured' | 'weekly' | 'daily' | 'decoded';
