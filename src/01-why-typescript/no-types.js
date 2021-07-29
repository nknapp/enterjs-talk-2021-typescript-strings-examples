
export function renderBook(book) {
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



function renderContents(book) {
    /* ...*/
}
