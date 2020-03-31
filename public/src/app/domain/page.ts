export class Page<T> {
    constructor(
        public pageNumber: number,
        public pageSize: number,
        public content?: T[],
        public totalElements?: number,
        public last?: boolean,
        public totalPages?: number,
        public first?: boolean
    ) {}


    static of<T>(page: any): Page<T> {
        return new Page<T>(page.pageNumber, page.pageSize, page.content, page.totalElements, page.last, page.totalPages, page.first);
    }

    update (newPage: Page<T>): void {
        this.content = newPage.content;
        this.pageNumber = newPage.pageNumber;
        this.pageSize = newPage.pageSize;
        this.totalElements = newPage.totalElements;
        this.last = newPage.last;
        this.totalPages = newPage.totalPages;
        this.first = newPage.first;
    }

    hasNext(): boolean  {
        return this.pageNumber < this.totalPages;
    }

    next(): number {
        if (this.hasNext()) {
            return this.pageNumber + 1;
        } else {
            return this.pageNumber;
        }
    }

    hasPrevious(): boolean  {
        return this.pageNumber > 0;
    }

    previous(): number {
        if (this.hasPrevious()) {
            return this.pageNumber - 1;
        } else {
            return this.pageNumber;
        }
    }
}
