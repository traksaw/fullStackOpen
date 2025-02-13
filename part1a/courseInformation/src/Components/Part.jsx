/* eslint-disable react/prop-types */

const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

export default Part