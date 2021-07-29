interface Chapter {
    title: string
    contents: string;
}

interface Book {
    title: string;
    summary: string;
    isbn: string;
    chapters: Chapter[]
}

export function renderBook(book: Book): string {
    return `
        ${book.title}
        ----
        ${book.summary}
        ----
        ISBN: ${book.isbn} 
        ====
        ${renderContents(book)}
    `
}


function renderContents(book: Book): string {
    return ""
}


export {}
