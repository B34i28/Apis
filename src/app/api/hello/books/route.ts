import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({
        book1:{ id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', type: 'fiction' },
        book2:{ id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', type: 'fiction' },
        book3:{ id: 3, title: '1984', author: 'George Orwell', type: 'fiction' },
        book4:{ id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', type: 'fiction' },
        book5:{ id: 5, title: 'Animal Farm', author: 'George Orwell', type: 'fiction' },
        book6:{ id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', type: 'fiction' },
        book7:{ id: 7, title: 'Brave New World', author: 'Aldous Huxley', type: 'fiction' },
        book8:{ id: 8, title: 'To the Lighthouse', author: 'Virginia Woolf', type: 'fiction' },
        book9:{ id: 9, title: 'The Feminine Mystique', author: 'Betty Friedan', type: 'non-fiction' },
        book10:{ id: 10, title: 'A Brief History of Time', author: 'Stephen Hawking', type: 'non-fiction' }
    });
}