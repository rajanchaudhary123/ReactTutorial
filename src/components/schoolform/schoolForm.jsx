import React from "react";
const schoolForm = () => {
  return (
    <>
      <div>
        <h1>FORM FOR STUDENT TO FILL</h1>
        <form class="form-style-4" action="" method="post">
          <label for="field1">
            <span>Enter Your Name</span>
            <input type="text" name="field1" required="true" />
          </label><br/>
          <label for="field2">
            <span>Email Address</span>
            <input type="email" name="field2" required="true" />
          </label><br/>
          <label for="field3">
            <span>Short Subject</span>
            <input type="text" name="field3" required="true" />
          </label><br/>
          <label for="field4">
            <span>Message to Us</span><br/>
            <textarea
              name="field4"
              onkeyup="adjust_textarea(this)"
              required="true"
            ></textarea>
          </label>
          <label>
            <span> </span>
            <input type="submit" value="Send Letter" />
          </label>
        </form>
      </div>
    </>
  );
};

export default schoolForm;
