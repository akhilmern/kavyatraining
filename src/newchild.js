const NewChild = (props) => {
     const fruits=props.fruits[0]
     const books=props.books
    
    
    return (  
        <div>
        <div>{fruits}</div>
        <div>Hello how are you?</div>

        <div>{books.title} is written by {books.author}.It has {books.pages}pages</div>
        
        </div>

    );
}
 
export default NewChild;