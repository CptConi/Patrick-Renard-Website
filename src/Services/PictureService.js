import http from './http-common';

export const getAllPictures = () => {
    return http.get('');
};

export const postPicture = (formData, uri) => {
    return http.post(uri, formData);
};

export const deletePicture = (id) => {
    return http.delete(`/${id}`);
};

export const setLandingPagePicture = (id, category) => {
    // return http.put('', id, category);
    console.log(`Updating ${category} Landing page Picture. Next landing page picture will be id: ${id}`);
}
