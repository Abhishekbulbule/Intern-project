import PropTypes from 'prop-types';


function Header({cls, title, text}){
    return (
        <div className={cls}>
            <h1>{title}</h1>
            {text && <p>{text}</p>}
        </div>
    )
}


Header.propTypes={
    cls : PropTypes.string,
    title : PropTypes.string,
    text : PropTypes.string,
}
export default Header;