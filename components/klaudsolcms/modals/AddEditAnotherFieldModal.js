import AppModal from "@/components/klaudsolcms/AppModal";
import { Formik, Form, Field } from "formik";

export const ADD_MODE = "ADD_MODE";
export const EDIT_MODE = "EDIT_MODE";

const input = [
  { value: "text", option: "Text"},
  { value: "textarea", option: "Text Area"},
  { value: "link", option: "Link"},
  { value: "image", option: "Image"},
  { value: "float", option: "Number"},

];

export default function AddEditAnotherFieldModal({
  formParams,
  show,
  onClose,
  onClick,
  mode,
}) {
  return (
    <AppModal
      show={show}
      onClose={onClose}
      onClick={onClick}
      modalTitle={mode === ADD_MODE ? "Add another field" : "Edit field"}
      buttonTitle={mode === ADD_MODE ? "Add" : "Update"}
    >
      {/* TODO: */}
      {/* <AddFieldBody /> */}
      <Formik {...formParams}>
        <Form>
          <table id="table_general">
            {/*table head*/}
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Field name="name" className="input_text" />
                </td>
                <td className="table-box">
                  <Field name="type" component="select" className="input_text">
                    {/*TODO: Make dynamic please */}
                    {/* <option value='text'>Text</option>
                    <option value='textarea'>Text Area</option>
                    <option value='link'>Link</option>
                    <option value='image'>Image</option>
                    <option value='float'>Number</option> */}
                  
                    {input.map((e, key) => {
                      return (
                        <option key={key} value={e.value}>
                          {e.option}
                        </option>
                      );
                    })}
                  </Field>
                </td>
                <td className="table-box">
                  <Field name="order" className="input_text" type="number" />
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
    </AppModal>
  );
}
