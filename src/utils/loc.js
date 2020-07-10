import strings from './strings';

export default function loc(key) {
    return key.split('.').reduce((acc, item) => acc[item] || '', strings);
}