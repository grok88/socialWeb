export const required = (value: string) => {
    return value ? undefined : 'Field is required';
}

export const maxLengthCreator = (max: number) => (value: string) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined;
}