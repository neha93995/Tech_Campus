import axios from 'axios';

export function HelloWorldApi(){
    return axios.get('http://localhost:8080')
}
export function HelloWorldBeanApi(){
    return axios.get('http://localhost:8080/hello-world-bean')
}

export function GetAllUsers(){
    return axios.get('http://localhost:8080/users')
}

export function signup(registerData){
    return axios.post('http://localhost:8080/signup', registerData)
}

export function login(loginData){
    return axios.post('http://localhost:8080/login', loginData)
}

export function getUserPersonalInfo(id){
    return axios.get(`http://localhost:8080/user/personal-info/${id}`)
}

export function postUserPersonalInfo(personalInfo)
{
    return axios.post(`http://localhost:8080/user/personal-info`,personalInfo,{
        headers: {
            'Content-Type': 'multipart/form-data',
          },
});
}

export function getUserEducationInfo(id)
{
    return axios.get(`http://localhost:8080/user/education-info/${id}`)
    
}

export function postUserEducationInfo(educationInfo)
{
    return axios.post('http://localhost:8080/user/education-info',educationInfo);
}

export function getUserSocialLinks(id)
{
    return axios.get(`http://localhost:8080/user/social-links/${id}`);
}


export function postUserSocialLinks(socialLinks)
{
    return axios.post('http://localhost:8080/user/social-links',socialLinks);
}

export function getUserSkills(id)
{
    return axios.get(`http://localhost:8080/user/skills/${id}`);
}


export function postUserSkills(Skills)
{
    return axios.post('http://localhost:8080/user/skills',Skills);
}

export function deleteUserSkill(id)
{
    return axios.delete(`http://localhost:8080/user/skills/${id}`);
}


export function getAllTopics()
{
    return axios.get('http://localhost:8080/tech-topics');
}

export function getBlogs(path)
{
    return axios.get(`http://localhost:8080/blogs/${path}`);
}

export function getTopicsByStringContaining(query){
   return  axios.get(`http://localhost:8080/tech-topics/search`, { params: { query } });
}

export function postBlog(formData){
    return axios.post(`http://localhost:8080/blogs/post`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function getAllBlogs()
{
    return axios.get(`http://localhost:8080/blogs/all`);
}

export function getBlogsByTopic(topicId)
{
    return axios.get(`http://localhost:8080/blogs/topic/${topicId}`);
}


export function getBlogImages(id)
{
    return axios.get(`http://localhost:8080/blogs/blog/${id}/images`);
}