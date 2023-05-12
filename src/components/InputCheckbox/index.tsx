import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        htmlFor={inputId}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}


































// import classNames from "classnames"
// import { useRef } from "react"
// import { InputCheckboxComponent } from "./types"

// // InputCheckbox is a function that returns a JSX element representing a checkbox input

// export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
//   // Create a unique id for the input element
//   const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

//   return (
//     <div className="RampInputCheckbox--container" data-testid={inputId}>
//       {/* The label for the checkbox. The class names are dynamic and will change based on the state of the checkbox. */}
//       <label
//         htmlFor={inputId} // BUG 2
//         className={classNames("RampInputCheckbox--label", {
//           "RampInputCheckbox--label-checked": checked,
//           "RampInputCheckbox--label-disabled": disabled,
//         })}
//       />
//       {/* The actual checkbox */}
//       <input
//         id={inputId}
//         name="approval"
//         type="checkbox"
//         className="RampInputCheckbox--input"
//         checked={checked}
//         disabled={disabled}
//         onChange={() => {
//           // console.debug("sending...", !checked)
//           onChange(!checked)
//         }}
//       />
//     </div>
//   )
// }
