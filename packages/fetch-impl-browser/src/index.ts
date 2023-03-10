const { fetch } = globalThis;

export default fetch as (input: RequestInfo, init?: RequestInit) => Promise<Response>;
