/**
 * Updates the properties of an object based on the input change event.
 *
 * @param e - The change event from an input or textarea element.
 * @param object - The object whose properties need to be updated.
 * @returns A new object with the updated properties.
 */
export const updateObjectProperties = <T>(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, object: T) => {
    const key = e.target.name || e.target.id;
    return {
        ...object,
        [key]: e.target.value,
    } as T;
};
