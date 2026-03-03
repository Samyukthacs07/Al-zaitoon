'use client';

export default function WhatsAppButton() {
    const phone = '971528593945';
    const url = `https://wa.me/${phone}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 9999,
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="34"
                height="34"
                fill="#fff"
            >
                <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.93a13.16 13.16 0 0 0 1.795 6.638L2.667 29.333l7.01-1.838A13.28 13.28 0 0 0 16.004 29.3 13.27 13.27 0 0 0 29.333 16 13.27 13.27 0 0 0 16.004 2.667Zm0 24.27a10.91 10.91 0 0 1-5.56-1.52l-.398-.237-4.13 1.083 1.1-4.026-.26-.415a10.88 10.88 0 0 1-1.67-5.81 10.93 10.93 0 0 1 10.92-10.88A10.93 10.93 0 0 1 26.93 16a10.93 10.93 0 0 1-10.926 10.937Zm5.99-8.18c-.328-.164-1.944-.96-2.246-1.07-.302-.108-.522-.163-.742.164-.22.328-.852 1.07-1.044 1.29-.192.22-.385.248-.713.083a8.98 8.98 0 0 1-2.645-1.632 9.92 9.92 0 0 1-1.83-2.278c-.192-.328-.02-.506.144-.67.148-.148.328-.385.493-.578.164-.192.22-.328.328-.548.11-.22.055-.412-.027-.578-.083-.164-.742-1.79-1.017-2.45-.268-.644-.54-.557-.742-.567l-.632-.012a1.21 1.21 0 0 0-.878.412 3.69 3.69 0 0 0-1.152 2.75c0 1.62 1.18 3.186 1.344 3.406.164.22 2.32 3.544 5.62 4.97.786.34 1.4.542 1.878.694.79.25 1.508.215 2.076.13.633-.094 1.944-.795 2.218-1.562.274-.768.274-1.427.192-1.563-.083-.137-.302-.22-.632-.384Z" />
            </svg>
        </a>
    );
}
