export interface Welcome {
    results:  number;
    metadata: Metadata;
    data:     Brands[];
}

export interface Brands {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
    nextPage:      number;
}
