import postReduce, { addPost, postDelete } from "./postReducer"


let state = {
    postDate: [
        { id: "1", message: "Привет чувачок", like: "20", dislike: "15" },
        { id: "2", message: "Другие слова", like: "100", dislike: "4" },
        { id: "3", message: "Совсем другие слова", like: "10", dislike: "5" },

    ]
}
it("length post should be more" , ()=>{
  
    let action = addPost("it-kamasutra")
    let statePost = postReduce(state, action)

    expect(statePost.postDate.length).toBe(4)
    expect(statePost.postDate[3].message).toBe("it-kamasutra")

})
it("correct post message", () => {

    let action = addPost("it-kamasutra")
    let statePost = postReduce(state, action)

    expect(statePost.postDate[3].message).toBe("it-kamasutra")

})
it("length posts should be smaller", () => {

    let action = postDelete("1") 
    let statePost = postReduce(state, action)

    expect(statePost.postDate.length).toBe(2)

}) 