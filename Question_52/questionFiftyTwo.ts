interface SkillSet{
    [skillList:string]: string[],
}
let userSkills:SkillSet = {
    'coding':['Javascript','Typescript','Python'],
    'framework':['React','Next','Fast'],
}
let selectedSkills:SkillSet = {
    'programming':['Java','C#','C'],
    'tools':['Git','Docker'],
}
console.log(selectedSkills);