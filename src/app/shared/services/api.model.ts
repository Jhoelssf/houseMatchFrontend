export interface TransactionFilterInput {
    typeProperty?: string | undefined;
    rooms?: number | undefined;
    bathrooms?: number | undefined;
    minArea?: number | undefined;
    maxArea?: number | undefined;
    typeTransaction?: string | undefined;
    maxCost?: number | undefined;
    minCost?: number | undefined;
    country?: string | undefined;
    province?: string | undefined;
    district?: string | undefined;
}
