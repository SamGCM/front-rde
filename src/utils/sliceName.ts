export const sliceName = (name: string): string => {
    if(name.length >= 22) {
        return name.slice(0,22) + "..."
    }

    else {
        return name;
    }
}   