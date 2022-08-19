import React from 'react'

export const Form_Element = () => {
    return (
        <div>
            <div id="main">
                <div className="row">
                    <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                    <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                        {/* <!-- Search for small screen--> */}
                        <div className="container">
                            <div className="row">
                                <div className="col s10 m6 l6">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Form Elements</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Form</a>
                                        </li>
                                        <li className="breadcrumb-item active">Form Elements
                  </li>
                                    </ol>
                                </div>
                                <div className="col s2 m6 l6"><a className="btn dropdown-settings waves-effect waves-light breadcrumbs-btn right" href="#!" data-target="dropdown1"><i className="material-icons hide-on-med-and-up">settings</i><span className="hide-on-small-onl">Settings</span><i className="material-icons right">arrow_drop_down</i></a>
                                    <ul className="dropdown-content" id="dropdown1" tabindex="0">
                                        <li tabindex="0"><a className="grey-text text-darken-2" href="user-profile-page.html">Profile<span className="new badge red">2</span></a></li>
                                        <li tabindex="0"><a className="grey-text text-darken-2" href="app-contacts.html">Contacts</a></li>
                                        <li tabindex="0"><a className="grey-text text-darken-2" href="page-faq.html">FAQ</a></li>
                                        <li className="divider" tabindex="-1"></li>
                                        <li tabindex="0"><a className="grey-text text-darken-2" href="user-login.html">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="container">
                            <div className="card">
                                <div className="card-content">
                                    <p className="caption mb-0">Forms are the standard way to receive user inputted data. The transitions and smoothness
      of these elements are very important because of the inherent user interaction associated with forms.</p>
                                </div>
                            </div>
                            {/* <!-- Input Fields --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="input-fields" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Input Fields</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-input-fields">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-input-fields">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-input-fields">
                                                <div className="row">
                                                    <div className="col s12">
                                                        <p>Text fields allow user input. The border should light up simply and clearly indicating which field
                the user is currently editing. You must have a <code className="language-markup">.input-field</code> div
                wrapping your input and label. This helps our jQuery animate the label. This is only used in our
                Input and Textarea form elements.</p>
                                                        <p>The validate className leverages HTML5 validation and will add a <code className="language-markup">valid</code>
                and <code className="language-markup">invalid</code> className accordingly. If you don't want the Green and
                Red validation states, just remove the <code className="language-markup">validate</code> className from your
                inputs.</p>
                                                        <br />
                                                        <form className="row">
                                                            <div className="col s12">
                                                                <div className="input-field col s12">
                                                                    <input placeholder="Placeholder" id="first_name1" type="text" className="validate" />
                                                                    <label for="first_name1">First Name</label>
                                                                </div>
                                                                <div className="input-field col s12">
                                                                    <input id="last_name" type="text" />
                                                                    <label for="last_name">Last Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col s12">
                                                                <div className="input-field col s12">
                                                                    <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                                                                    <label for="disabled">Disabled</label>
                                                                </div>
                                                            </div>
                                                            <div className="col s12">
                                                                <div className="input-field col s12">
                                                                    <input id="password" type="password" className="validate" />
                                                                    <label for="password">Password</label>
                                                                </div>
                                                            </div>
                                                            <div className="col s12">
                                                                <div className="input-field col s12">
                                                                    <input id="email3" type="email" className="validate" />
                                                                    <label for="email3">Email</label>
                                                                </div>
                                                            </div>
                                                            <div className="col s12">
                                                                <div className="col s12">
                                                                    This is an inline input field:
                    <div className="input-field inline">
                                                                        <input id="email" type="email" className="validate" />
                                                                        <label for="email" data-error="wrong" data-success="right">Email</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="html-input-fields">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div className="row">
                                                        &lt;form className="col s12">
                                                        &lt;div className="row">
                                                        &lt;div className="input-field col s6">
                                                        &lt;input placeholder="Placeholder" id="first_name" type="text" className="validate">
                                                        &lt;label for="first_name">First Name&lt;/label>
                                                        &lt;/div>
                                                        &lt;div className="input-field col s6">
                                                        &lt;input id="last_name" type="text" className="validate">
                                                        &lt;label for="last_name">Last Name&lt;/label>
                                                        &lt;/div>
                                                        &lt;/div>
                                                        &lt;div className="row">
                                                        &lt;div className="input-field col s12">
                                                        &lt;input disabled value="I am not editable" id="disabled" type="text" className="validate">
                                                        &lt;label for="disabled">Disabled&lt;/label>
                                                        &lt;/div>
                                                        &lt;/div>
                                                        &lt;div className="row">
                                                        &lt;div className="input-field col s12">
                                                        &lt;input id="password" type="password" className="validate">
                                                        &lt;label for="password">Password&lt;/label>
                                                        &lt;/div>
                                                        &lt;/div>
                                                        &lt;div className="row">
                                                        &lt;div className="input-field col s12">
                                                        &lt;input id="email" type="email" className="validate">
                                                        &lt;label for="email">Email&lt;/label>
                                                        &lt;/div>
                                                        &lt;/div>
                                                        &lt;div className="row">
                                                        &lt;div className="col s12">
                                                        This is an inline input field:
                                                        &lt;div className="input-field inline">
                                                        &lt;input id="email" type="email" className="validate">
                                                        &lt;label for="email" data-error="wrong" data-success="right">Email&lt;/label>
                                                        &lt;/div>
                                                        &lt;/div>
                                                        &lt;/div>
                                                        &lt;/form>
                                                        &lt;/div> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Prefilling Text Inputs --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="prefilling-text" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4 className="card-title">Prefilling Text Inputs</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0"><a className="active p-0" href="#view-prefilling-text">View</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#html-prefilling-text">Html</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#js-prefilling-text">JS</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-prefilling-text">
                                                <div className="row">
                                                    <div className="col s12">
                                                        <p>If you are having trouble with the labels overlapping prefilled content, Try adding <code
                                                            className="language-markup">className="active"</code>
                to the label.
                <br />You can also call the function <code className="language-javascript">M.updateTextFields();</code>
                to reinitialize all the Materialize labels on the page if you are dynamically adding inputs.</p>
                                                    </div>
                                                    <div className="col s12">
                                                        <div className="input-field col s6">
                                                            <div className="row">
                                                                <input value="Alvin" id="first_name2" type="text" className="validate" />
                                                                <label className="active" for="first_name2">First sadiya</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="html-prefilling-text">
                                                <pre><code className="language-javascript">
                                                    {/* &lt;div className="row">
                                                        &lt;div className="input-field col s6">
                                                        &lt;input value="Alvin" id="first_name2" type="text" className="validate">
                                                        &lt;label className="active" for="first_name2">First Name&lt;/label>
                                                        &lt;/div>
                                                        &lt;/div> */}
                                                </code></pre>
                                            </div>
                                            <div id="js-prefilling-text">
                                                <pre><code className="language-markup">
                                                    {/* $(document).ready(function() {
                                                        M.updateTextFields()
                                                    }); */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Icon Prefixes --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="icon-prefixes" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Icon Prefixes</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-icon-prefixes">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-icon-prefixes">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-icon-prefixes">
                                                <p>You can add an icon prefix to make the form input label even more clear. Just add an icon with the className
            <code className="language-markup">prefix</code> before the input and label.</p>
                                                <br />
                                                <div className="row">
                                                    <form className="col s12">
                                                        <div className="row">
                                                            <div className="input-field col s6">
                                                                <i className="material-icons prefix">account_circle</i>
                                                                <input id="icon_prefix3" type="text" className="validate" />
                                                                <label for="icon_prefix3">First Name</label>
                                                            </div>
                                                            <div className="input-field col s6">
                                                                <i className="material-icons prefix">phone</i>
                                                                <input id="icon_telephone" type="number" className="validate" />
                                                                <label for="icon_telephone">Telephone</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div id="html-icon-prefixes">
                                                <pre ><code className="language-markup" >
                                                    {/* &lt;div className="row">
                                                            &lt;form className="col s12">
                                                            &lt;div className="row">
                                                            &lt;div className="input-field col s6">
                                                            &lt;i className="material-icons prefix">account_circle&lt;/i>
                                                            &lt;input id="icon_prefix" type="text" className="validate">
                                                            &lt;label for="icon_prefix">First Name&lt;/label>
                                                            &lt;/div>
                                                            &lt;div className="input-field col s6">
                                                            &lt;i className="material-icons prefix">phone&lt;/i>
                                                            &lt;input id="icon_telephone" type="tel" className="validate">
                                                            &lt;label for="icon_telephone">Telephone&lt;/label>
                                                            &lt;/div>
                                                            &lt;/div>
                                                            &lt;/form>
                                                            &lt;/div> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Custom Error or Success Messages --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="custom-error" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Custom Error or Success Messages</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-custom-error">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-custom-error">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-custom-error">
                                                <p>You can add custom validation messages by adding either <code className="language-markup">data-error</code>
            or <code className="language-markup">data-success</code> attributes to your input field labels.</p>
                                                <br />
                                                <div className="row">
                                                    <form className="col s12">

                                                        <div className="input-field col s12">
                                                            <input id="email4" type="email" className="validate" />
                                                            <label for="email4" data-error="wrong" data-success="right">Email</label>
                                                            <span className="helper-text" data-error="wrong" data-success="right">Helper Text</span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div id="html-custom-error">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div className="row">
                                                    &lt;form className="col s12">
                                                    &lt;div className="row">
                                                    &lt;div className="input-field col s12">
                                                    &lt;input id="email" type="email" className="validate">
                                                    &lt;label for="email" data-error="wrong" data-success="right">Email&lt;/label>
                                                    &lt;span className="helper-text" data-error="wrong" data-success="right">Helper Text&lt;/span>
                                                    &lt;/div>
                                                    &lt;/div>
                                                    &lt;/form>
                                                    &lt;/div> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Textarea --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="textarea" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4 className="card-title">Textarea</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0"><a className="active p-0" href="#view-textarea">View</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#html-textarea">Html</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#js-textarea">JS</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-textarea">
                                                <p>Textareas allow larger expandable user input. The border should light up simply and clearly indicating
            which field the user is currently editing. You must have a <code className="language-markup">.input-field</code>
            div wrapping your input and label. This helps our jQuery animate the label. This is only used in our
            Input and Textarea form elements.</p>
                                                <p>
                                                    <strong>Textareas will auto resize to the text inside.</strong>
                                                </p>
                                                <div className="row">
                                                    <form className="col s12">
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <textarea id="textarea2" className="materialize-textarea"></textarea>
                                                                <label for="textarea2">Textarea</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div id="html-textarea">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div className="row">
                                                    &lt;form className="col s12">
                                                    &lt;div className="row">
                                                    &lt;div className="input-field col s12">
                                                    &lt;textarea id="textarea2" className="materialize-textarea">&lt;/textarea>
                                                    &lt;label for="textarea2">Textarea&lt;/label>
                                                    &lt;/div>
                                                    &lt;/div>
                                                    &lt;/form>
                                                    &lt;/div> */}
                                                </code></pre>
                                            </div>
                                            <div id="js-textarea">
                                                <p>advanced note: When dynamically changing the value of a textarea with methods like jQuery's <code
                                                    className="language-markup">.val()</code>,
            you must trigger an autoresize on it afterwords because .val() does not automatically trigger the events
            we've binded to the textarea. </p>
                                                <pre><code className="language-javascript">
                                                    $('#textarea2').val('New Text');
                                                    M.textareaAutoResize($('#textarea2'));
  </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Icon Prefixes --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="icon-prefixes-two" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Icon Prefixes</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-icon-prefixes-two">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-icon-prefixes-two">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-icon-prefixes-two">
                                                <p>You can add an icon prefix to make the form input label even more clear. Just add an icon with the className
            <code className="language-markup">prefix</code> before the input and label.</p>
                                                <br />
                                                <div className="row">
                                                    <form className="col s12">
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <i className="material-icons prefix">mode_edit</i>
                                                                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                                                <label for="icon_prefix2">Message</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div id="html-icon-prefixes-two">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div className="row">
                                                    &lt;form className="col s12">
                                                    &lt;div className="row">
                                                    &lt;div className="input-field col s6">
                                                    &lt;i className="material-icons prefix">mode_edit&lt;/i>
                                                    &lt;textarea id="icon_prefix2" className="materialize-textarea">&lt;/textarea>
                                                    &lt;label for="icon_prefix2">First Name&lt;/label>
                                                    &lt;/div>
                                                    &lt;/div>
                                                    &lt;/form>
                                                    &lt;/div> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Select --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="select" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Select</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-select">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-select">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-select">
                                                <p> Select allows user input through specified options. Make sure you wrap it in a <code
                                                    className="language-markup">.input-field</code>
            for proper alignment with other text fields. Remember that this is a jQuery plugin so make sure you
            <a href="#select-initialization">initialize</a> this in your document ready. </p>
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <select>
                                                            <option value="" disabled selected>Choose your option</option>
                                                            <option value="1">Option 1</option>
                                                            <option value="2">Option 2</option>
                                                            <option value="3">Option 3</option>
                                                        </select>
                                                        <label>Materialize Select</label>
                                                    </div>

                                                    <div className="input-field col s12">
                                                        <select>
                                                            <optgroup label="team 1">
                                                                <option value="1">Option 1</option>
                                                                <option value="2">Option 2</option>
                                                            </optgroup>
                                                            <optgroup label="team 2">
                                                                <option value="3">Option 3</option>
                                                                <option value="4">Option 4</option>
                                                            </optgroup>
                                                        </select>
                                                        <label>Optgroups</label>
                                                    </div>

                                                    <div className="input-field col s12 m6">
                                                        <select className="icons">
                                                            <option value="" disabled selected>Choose your option</option>
                                                            <option value="" data-icon="images/avatar/avatar-1.png">example 1</option>
                                                            <option value="" data-icon="images/avatar/avatar-2.png">example 2</option>
                                                            <option value="" data-icon="images/avatar/avatar-3.png">example 3</option>
                                                        </select>
                                                        <label>Images in select</label>
                                                    </div>
                                                    <div className="input-field col s12 m6">
                                                        <select className="icons">
                                                            <option value="" disabled selected>Choose your option</option>
                                                            <option value="" data-icon="images/avatar/avatar-1.png" className="left">example 1
                </option>
                                                            <option value="" data-icon="images/avatar/avatar-2.png" className="left">example 2
                </option>
                                                            <option value="" data-icon="images/avatar/avatar-3.png" className="left">example 3
                </option>
                                                        </select>
                                                        <label>Images in select</label>
                                                    </div>

                                                    <label>Browser Select</label>
                                                    <select className="browser-default">
                                                        <option value="" disabled selected>Choose your option</option>
                                                        <option value="1">Option 1</option>
                                                        <option value="2">Option 2</option>
                                                        <option value="3">Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div id="html-select">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div className="input-field col s12">
                                                    &lt;select>
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="1">Option 1&lt;/option>
                                                    &lt;option value="2">Option 2&lt;/option>
                                                    &lt;option value="3">Option 3&lt;/option>
                                                    &lt;/select>
                                                    &lt;label>Materialize Select&lt;/label>
                                                    &lt;/div>
                                                    &lt;div className="input-field col s12">
                                                    &lt;select multiple>
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="1">Option 1&lt;/option>
                                                    &lt;option value="2">Option 2&lt;/option>
                                                    &lt;option value="3">Option 3&lt;/option>
                                                    &lt;/select>
                                                    &lt;label>Materialize Multiple Select&lt;/label>
                                                    &lt;/div>
                                                    &lt;div className="input-field col s12">
                                                    &lt;select>
                                                    &lt;optgroup label="team 1">
                                                    &lt;option value="1">Option 1&lt;/option>
                                                    &lt;option value="2">Option 2&lt;/option>
                                                    &lt;/optgroup>
                                                    &lt;optgroup label="team 2">
                                                    &lt;option value="3">Option 3&lt;/option>
                                                    &lt;option value="4">Option 4&lt;/option>
                                                    &lt;/optgroup>
                                                    &lt;/select>
                                                    &lt;label>Optgroups&lt;/label>
                                                    &lt;/div>
                                                    &lt;div className="input-field col s12 m6">
                                                    &lt;select className="icons">
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="" data-icon="../../app-assets/images/avatar/avatar-7.png" className="circle">example 1&lt;/option>
                                                    &lt;option value="" data-icon="../../app-assets/images/avatar/avatar-5.png" className="circle">example 2&lt;/option>
                                                    &lt;option value="" data-icon="../../app-assets/images/avatar/avatar-3.png" className="circle">example 3&lt;/option>
                                                    &lt;/select>
                                                    &lt;label>Images in select&lt;/label>
                                                    &lt;/div>
                                                    &lt;div className="input-field col s12 m6">
                                                    &lt;select className="icons">
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="" data-icon="../../app-assets/images/avatar/avatar-7.png" className="left circle">example 1&lt;/option>
                                                    &lt;option value="" data-icon="../../app-assets/images/avatar/avatar-5.png" className="left circle">example 2&lt;/option>
                                                    &lt;option value="" data-icon="../../app-assets/images/avatar/avatar-3.png" className="left circle">example 3&lt;/option>
                                                    &lt;/select>
                                                    &lt;label>Images in select&lt;/label>
                                                    &lt;/div>
                                                    &lt;label>Browser Select&lt;/label>
                                                    &lt;select className="browser-default">
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="1">Option 1&lt;/option>
                                                    &lt;option value="2">Option 2&lt;/option>
                                                    &lt;option value="3">Option 3&lt;/option>
                                                    &lt;/select> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Disabled Styles --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="disabled-styles" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Disabled Styles</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-disabled-styles">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-disabled-styles">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-disabled-styles">
                                                <p>You can also add <code className="language-markup">disabled</code> to the select element to make the whole
            thing disabled. Or if you add <code className="language-markup">disabled</code> to the options, the
            individual options will be unselectable. </p>
                                                <div className="row">
                                                    <div className="col s12">
                                                        <form className="col s12 m6">
                                                            <div className="input-field">
                                                                <select disabled>
                                                                    <option value="" disabled selected>Choose your option</option>
                                                                    <option value="1">Option 1</option>
                                                                    <option value="2">Option 2</option>
                                                                    <option value="3">Option 3</option>
                                                                </select>
                                                                <label>Materialize Disabled</label>
                                                            </div>

                                                            <label>Browser Disabled</label>
                                                            <select className="browser-default mb-4" disabled>
                                                                <option value="" disabled selected>Choose your option</option>
                                                                <option value="1">Option 1</option>
                                                                <option value="2">Option 2</option>
                                                                <option value="3">Option 3</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="html-disabled-styles">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div className="input-field">
                                                    &lt;select disabled>
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="1">Option 1&lt;/option>
                                                    &lt;option value="2">Option 2&lt;/option>
                                                    &lt;option value="3">Option 3&lt;/option>
                                                    &lt;/select>
                                                    &lt;label>Materialize Disabled&lt;/label>
                                                    &lt;/div>
                                                    &lt;label>Browser Disabled&lt;/label>
                                                    &lt;select className="browser-default" disabled>
                                                    &lt;option value="" disabled selected>Choose your option&lt;/option>
                                                    &lt;option value="1">Option 1&lt;/option>
                                                    &lt;option value="2">Option 2&lt;/option>
                                                    &lt;option value="3">Option 3&lt;/option>
                                                    &lt;/select> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Radio Buttons --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="radio-buttons" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Radio Buttons</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-radio-buttons">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-radio-buttons">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-radio-buttons">
                                                <p>Radio Buttons are used when the user must make only one selection out of a group of items. The
            <code className="language-markup">for</code> attribute is necessary to bind our custom radio button with the
            input. Add the input's <code className="language-markup">id</code> as the value of the <code
                                                        className="language-markup">for</code>
            attribute of the label.</p>
                                                <p>Add radio buttons to a group by adding the name attribute along with the same corresponding value for
                                                each of the radio buttons in the group. Create disabled radio buttons by adding the disabled attribute as
            shown below.</p>
                                                <form action="#" className="mt-1">
                                                    <p className="mb-1">
                                                        <label>
                                                            <input name="group1" type="radio" checked />
                                                            <span>Radio-1</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input name="group1" type="radio" />
                                                            <span>Radio-2 </span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input className="with-gap" name="group1" type="radio" />
                                                            <span>Radio-3</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input name="group1" type="radio" disabled="disabled" />
                                                            <span>Disabled Radio</span>
                                                        </label>
                                                    </p>
                                                </form>
                                            </div>
                                            <div id="html-radio-buttons">
                                                <pre><code className="language-markup">
                                                    {/* &lt;form action="#">
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input name="group1" type="radio" checked/>
                                                    &lt;span>Radio-1&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input name="group1" type="radio" />
                                                    &lt;span>Radio-2&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input className="with-gap" name="group1" type="radio" />
                                                    &lt;span>Radio-3&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input name="group1" type="radio" disabled="disabled" />
                                                    &lt;span>Diabled Radio&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;/form> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Options --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="options" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Options</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-options">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-options">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-options">
                                                <p>To create a radio button with a gap, add <code className="language-markup">className="with-gap"</code> to your
            input. See the example below.</p>
                                                <p className="mt-1">
                                                    <label>
                                                        <input className="with-gap" name="group3" type="radio" checked />
                                                        <span>Radio-1</span>
                                                    </label>
                                                </p>
                                            </div>
                                            <div id="html-options">
                                                <pre><code className="language-markup">
                                                    {/* &lt;p>
                                                    &lt;label>
                                                    &lt;input className="with-gap" name="group3" type="radio" checked />
                                                    &lt;span>Radio-1&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Checkboxes --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="checkboxes" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Checkboxes</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-checkboxes">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-checkboxes">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-checkboxes">
                                                <p>Use checkboxes when looking for yes or no answers. The <code className="language-markup">for</code>
            attribute is necessary to bind our custom checkbox with the input. Add the input's <code
                                                        className="language-markup">id</code>
            as the value of the <code className="language-markup">for</code> attribute of the label. </p>
                                                <form action="#" className="mt-1">
                                                    <p className="mb-1">
                                                        <label>
                                                            <input type="checkbox" />
                                                            <span>Checkbox-1</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input type="checkbox" checked="checked" />
                                                            <span>Checkbox-2</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input type="checkbox" className="filled-in" checked="checked" />
                                                            <span>Filled in</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input id="indeterminate-checkbox" type="checkbox" />
                                                            <span>Indeterminate Style</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input type="checkbox" checked="checked" disabled="disabled" />
                                                            <span>Checkbox-3</span>
                                                        </label>
                                                    </p>
                                                    <p className="mb-1">
                                                        <label>
                                                            <input type="checkbox" disabled="disabled" />
                                                            <span>Disabled Radio</span>
                                                        </label>
                                                    </p>
                                                </form>
                                            </div>
                                            <div id="html-checkboxes">
                                                <pre><code className="language-markup">
                                                    {/* &lt;form action="#">
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input type="checkbox" />
                                                    &lt;span>Checkbox-1&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input type="checkbox" checked="checked" />
                                                    &lt;span>Checkbox-2&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input type="checkbox" className="filled-in" checked="checked" />
                                                    &lt;span>Filled in&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input id="indeterminate-checkbox" type="checkbox" />
                                                    &lt;span>Indeterminate Style&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input type="checkbox" checked="checked" disabled="disabled" />
                                                    &lt;span>Checkbox-3&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;p>
                                                    &lt;label>
                                                    &lt;input type="checkbox" disabled="disabled" />
                                                    &lt;span>Checkbox-4&lt;/span>
                                                    &lt;/label>
                                                    &lt;/p>
                                                    &lt;/form> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Switches --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="switches" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Switches</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-switches">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-switches">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-switches">
                                                <p>Use checkboxes when looking for yes or no answers. The <code className="language-markup">for</code>
            attribute is necessary to bind our custom checkbox with the input. Add the input's <code
                                                        className="language-markup">id</code>
            as the value of the <code className="language-markup">for</code> attribute of the label. </p>
                                                <form action="#" className="mt-1">
                                                    <div className="switch mb-1">
                                                        <label>
                                                            Off
                <input checked type="checkbox" />
                                                            <span className="lever"></span>
                On
              </label>
                                                    </div>
                                                    <div className="switch">
                                                        <label>
                                                            Off
                <input disabled type="checkbox" />
                                                            <span className="lever"></span>
                On
              </label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div id="html-switches">
                                                <pre><code className="language-markup">
                                                    {/* &lt;!-- Switch -->
                                                    &lt;div className="switch">
                                                    &lt;label>
                                                    Off
                                                    &lt;input type="checkbox">
                                                    &lt;span className="lever">&lt;/span>
                                                    On
                                                    &lt;/label>
                                                    &lt;/div>
                                                    &lt;!-- Disabled Switch -->
                                                    &lt;div className="switch">
                                                    &lt;label>
                                                    Off
                                                    &lt;input disabled type="checkbox">
                                                    &lt;span className="lever">&lt;/span>
                                                    On
                                                    &lt;/label>
                                                    &lt;/div> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- File Input --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="file-input" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">File Input</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-file-input">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-file-input">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-file-input">
                                                <p>If you want to style an input button with a path input we provide this structure.</p>
                                                <form action="#">
                                                    <div className="file-field input-field">
                                                        <div className="btn">
                                                            <span>File</span>
                                                            <input type="file" />
                                                        </div>
                                                        <div className="file-path-wrapper">
                                                            <input className="file-path validate" type="text" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div id="html-file-input">
                                                <pre><code className="language-markup">
                                                    {/* &lt;form action="#">
                                                    &lt;div className="file-field input-field">
                                                    &lt;div className="btn">
                                                    &lt;span>File&lt;/span>
                                                    &lt;input type="file">
                                                    &lt;/div>
                                                    &lt;div className="file-path-wrapper">
                                                    &lt;input className="file-path validate" type="text">
                                                    &lt;/div>
                                                    &lt;/div>
                                                    &lt;/form> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Multiple File Input --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="multiple-file-input" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">Multiple File Input</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-multiple-file-input">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-multiple-file-input">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-multiple-file-input">
                                                <p>You can also use the <code className="language-markup">multiple</code> attribute to allow multiple file
            uploads. </p>
                                                <form action="#">
                                                    <div className="file-field input-field">
                                                        <div className="btn">
                                                            <span>File</span>
                                                            <input type="file" multiple />
                                                        </div>
                                                        <div className="file-path-wrapper">
                                                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div id="html-multiple-file-input">
                                                <pre><code className="language-markup">
                                                    {/* &lt;form action="#">
                                                    &lt;div className="file-field input-field">
                                                    &lt;div className="btn">
                                                    &lt;span>File&lt;/span>
                                                    &lt;input type="file" multiple>
                                                    &lt;/div>
                                                    &lt;div className="file-path-wrapper">
                                                    &lt;input className="file-path validate" type="text" placeholder="Upload one or more files">
                                                    &lt;/div>
                                                    &lt;/div>
                                                    &lt;/form> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Range --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="range" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4 className="card-title">Range</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0"><a className="active p-0" href="#view-Range">View</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#html-Range">Html</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#js-Range">JS</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-Range">
                                                <p>Add a range slider for values with a wide range. This one is set to be a number between 0 and 100. We
                                                have two different types of sliders. nouiSlider is a 3rd party plugin which we've modified. To use the
            noUiSlider, you will have to manually link the <code className="language-markup">nouislider.css</code> and
            <code className="language-markup">nouislider.js</code> files located in the extras folder.</p>
                                                <h4 className="header">noUiSlider</h4>
                                                <p>See noUiSlider's official documentation <a href="https://refreshless.com/nouislider/">here</a> to see a
            variety of slider options</p>
                                                <div id="test-slider" className="mt-2"></div>
                                            </div>
                                            <div id="html-Range">
                                                <pre><code className="language-markup">
                                                    {/* &lt;div id="test-slider">&lt;/div> */}
                                                </code></pre>
                                            </div>
                                            <div id="js-Range">
                                                <pre><code className="language-javascript">
                                                    {/* var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
                                                        start: [20, 80],
      connect: true,
      step: 1,
      orientation: 'horizontal', // 'horizontal' or 'vertical'
      range: {
                                                        'min': 0,
      'max': 100
    },
    format: wNumb({
                                                        decimals: 0
    })
  }); */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- HTML5 Range --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="html-range" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l10">
                                                        <h4 className="card-title">HTML5 Range</h4>
                                                    </div>
                                                    <div className="col s12 m6 l2">
                                                        <ul className="tabs">
                                                            <li className="tab col s6 p-0"><a className="active p-0" href="#view-html-range">View</a></li>
                                                            <li className="tab col s6 p-0"><a className="p-0" href="#html-html-range">Html</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-html-range">
                                                <form action="#">
                                                    <p className="range-field">
                                                        <input type="range" name="points" min="0" max="100" />
                                                    </p>
                                                </form>
                                            </div>
                                            <div id="html-html-range">
                                                <pre><code className="language-markup">
                                                    {/* &lt;form action="#">
                                                    &lt;p className="range-field">
                                                    &lt;input type="range" id="test5" min="0" max="100" />
                                                    &lt;/p>
                                                    &lt;/form> */}
                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Date Picker --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="date-picker" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4 className="card-title">Date Picker</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0"><a className="active p-0" href="#view-date-picker">View</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#html-date-picker">Html</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#js-date-picker">JS</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-date-picker">
                                                <p>We use a modified version of pickadate.js to create a materialized date picker. Test it out below! </p>
                                                <label for="birthdate">Birthdate</label>
                                                <input type="text" className="datepicker" id="birthdate" />
                                            </div>
                                            <div id="html-date-picker">
                                                <pre><code className="language-markup">
                                                    &lt;input type="text" className="datepicker"&gt;
  </code></pre>
                                            </div>
                                            <div id="js-date-picker">
                                                <pre><code className="language-javascript">
                                                    {/* document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
                                                        $('.datepicker').datepicker();
  }); */}

                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Time Picker --> */}
                            <div className="row">
                                <div className="col s12">
                                    <div id="time-picker" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4 className="card-title">Time Picker</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0"><a className="active p-0" href="#view-time-picker">View</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#html-time-picker">Html</a></li>
                                                            <li className="tab col s4 p-0"><a className="p-0" href="#js-time-picker">JS</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-time-picker">
                                                <p>We use a modified version of pickatime.js to create a materialized time picker. Test it out below! </p>
                                                <label for="lunch-time">Lunch Time</label>
                                                <input type="text" className="timepicker" id="lunch-time" />
                                            </div>
                                            <div id="html-time-picker">
                                                <pre><code className="language-markup">
                                                    &lt;input type="text" className="timepicker"&gt;
  </code></pre>
                                            </div>
                                            <div id="js-time-picker">
                                                <pre><code className="language-javascript">
                                                    {/* document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.timepicker.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
                                                        $('.timepicker').timepicker();
  }); */}

                                                </code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Auto Complete --> */}

                            <div className="row">
                                <div className="col s12">
                                    <div id="autoComplete" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4>Auto Complete</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0">
                                                                <a href="#view-autocomplete" className="active p-0">View</a>
                                                            </li>
                                                            <li className="tab col s4 p-0">
                                                                <a href="#view-html" className="p-0">HTML</a>
                                                            </li>
                                                            <li className="tab col s4 p-0">
                                                                <a href="#view-js" className="p=0">JS</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-autocomplete">
                                                <div className="row">
                                                    <div className="col s12">
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <i className="material-icons prefix">textsms</i>
                                                                <input type="text" id="autocomplete-input" className="autocomplete" />
                                                                <label for="autocomplete-input">Autocomplete</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-html">
                                                <pre className="language-markup">
                                                    <code className="language-markup">
                                                        &lt;div className=&quot;row&quot;&gt;
                                                        &lt;div className=&quot;col s12&quot;&gt;
                                                        &lt;div className=&quot;row&quot;&gt;
                                                        &lt;div className=&quot;input-field col s12&quot;&gt;
                                                        &lt;i className=&quot;material-icons prefix&quot;&gt;textsms&lt;/i&gt;
                                                        &lt;input type=&quot;text&quot; id=&quot;autocomplete-input&quot; className=&quot;autocomplete&quot;&gt;
                                                        &lt;label for=&quot;autocomplete-input&quot;&gt;Autocomplete&lt;/label&gt;
                                                        &lt;/div&gt;
                                                        &lt;/div&gt;
                                                        &lt;/div&gt;
                                                        &lt;/div&gt;
  </code>
                                                </pre>
                                            </div>
                                            <div id="view-js">
                                                <pre className="language-javascript">
                                                    <code className="language-javascript">
                                                        {/* $(document).ready(function(){
                                                            $('input.autocomplete').autocomplete({
                                                                data: {
                                                                    "Apple": null,
                                                                    "Microsoft": null,
                                                                    "Google": 'https://placehold.it/250x250'
                                                                },
                                                            })
                                                        }); */}
                                                    </code>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Character counter --> */}

                            <div className="row">
                                <div className="col s12">
                                    <div id="autoComplete2" className="card card-tabs">
                                        <div className="card-content">
                                            <div className="card-title">
                                                <div className="row">
                                                    <div className="col s12 m6 l6">
                                                        <h4>Character Counter</h4>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0">
                                                                <a href="#view-counter" className="active p-0">View</a>
                                                            </li>
                                                            <li className="tab col s4 p-0">
                                                                <a href="#view-counter-html" className="p-0">HTML</a>
                                                            </li>
                                                            <li className="tab col s4 p-0">
                                                                <a href="#view-counter-js" className="p=0">JS</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-counter">
                                                <div className="row">
                                                    <div className="col s12">
                                                        <div className="row">
                                                            <form className="col s12">
                                                                <div className="row">
                                                                    <div className="input-field col s12">
                                                                        <input id="input_text" type="text" data-length="10" />
                                                                        <label for="input_text">Input text</label>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="input-field col s12">
                                                                        <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
                                                                        <label for="textarea1">Textarea</label>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div id="view-counter-html">
                                                <pre className="language-markup">
                                                    <code className="language-markup">
                                                        &lt;div className=&quot;row&quot;&gt;
                                                        &lt;form className=&quot;col s12&quot;&gt;
                                                        &lt;div className=&quot;row&quot;&gt;
                                                        &lt;div className=&quot;input-field col s6&quot;&gt;
                                                        &lt;input id=&quot;input_text&quot; type=&quot;text&quot; data-length=&quot;10&quot;&gt;
                                                        &lt;label for=&quot;input_text&quot;&gt;Input text&lt;/label&gt;
                                                        &lt;/div&gt;
                                                        &lt;/div&gt;
                                                        &lt;div className=&quot;row&quot;&gt;
                                                        &lt;div className=&quot;input-field col s12&quot;&gt;
                                                        &lt;textarea id=&quot;textarea1&quot; className=&quot;materialize-textarea&quot; data-length=&quot;120&quot;&gt;&lt;/textarea&gt;
                                                        &lt;label for=&quot;textarea1&quot;&gt;Textarea&lt;/label&gt;
                                                        &lt;/div&gt;
                                                        &lt;/div&gt;
                                                        &lt;/form&gt;
                                                        &lt;/div&gt;
  </code>
                                                </pre>
                                            </div>
                                            <div id="view-counter-js">
                                                <pre className="language-javascript">
                                                    <code className="language-javascript">
                                                        {/* $(document).ready(function() {
                                                            $('input#input_text, textarea#textarea1').characterCounter()
                                                        }); */}
                                                    </code>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- START RIGHT SIDEBAR NAV --> */}
                            <aside id="right-sidebar-nav">
                                <div id="slide-out-right" className="slide-out-right-sidenav sidenav rightside-navigation">
                                    <div className="row">
                                        <div className="slide-out-right-title">
                                            <div className="col s12 border-bottom-1 pb-0 pt-1">
                                                <div className="row">
                                                    <div className="col s2 pr-0 center">
                                                        <i className="material-icons vertical-text-middle"><a href="#" className="sidenav-close">clear</a></i>
                                                    </div>
                                                    <div className="col s10 pl-0">
                                                        <ul className="tabs">
                                                            <li className="tab col s4 p-0">
                                                                <a href="#messages" className="active">
                                                                    <span>Messages</span>
                                                                </a>
                                                            </li>
                                                            <li className="tab col s4 p-0">
                                                                <a href="#settings">
                                                                    <span>Settings</span>
                                                                </a>
                                                            </li>
                                                            <li className="tab col s4 p-0">
                                                                <a href="#activity">
                                                                    <span>Activity</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-out-right-body row pl-3">
                                            <div id="messages" className="col s12 pb-0">
                                                <div className="collection border-none mb-0">
                                                    <input className="header-search-input mt-4 mb-2" type="text" name="Search" placeholder="Search Messages" />
                                                    <ul className="collection right-sidebar-chat p-0 mb-0">
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-7.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Elizabeth Elliott</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">5.00 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-1.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Mary Adams</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">4.14 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-off avatar-50"><img
                                                                src="images/avatar/avatar-2.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Caleb Richards</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">4.14 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-3.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Caleb Richards</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Keny !</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">9.00 PM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-4.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">June Lane</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Ohh God</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">4.14 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-off avatar-50"><img
                                                                src="images/avatar/avatar-5.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Edward Fletcher</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Love you</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">5.15 PM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-6.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Crystal Bates</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can we</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">8.00 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-off avatar-50"><img
                                                                src="images/avatar/avatar-7.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Nathan Watts</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Great!</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">9.53 PM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-off avatar-50"><img
                                                                src="images/avatar/avatar-8.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Willard Wood</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Do it</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">4.20 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-1.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Ronnie Ellis</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Got that</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">5.20 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-9.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Daniel Russell</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">12.00 AM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-off avatar-50"><img
                                                                src="images/avatar/avatar-10.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Sarah Graves</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Okay you</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">11.14 PM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-off avatar-50"><img
                                                                src="images/avatar/avatar-11.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Andrew Hoffman</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can do</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">7.30 PM</span>
                                                        </li>
                                                        <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                            data-target="slide-out-chat">
                                                            <span className="avatar-status avatar-online avatar-50"><img
                                                                src="images/avatar/avatar-12.png" alt="avatar" />
                                                                <i></i>
                                                            </span>
                                                            <div className="user-content">
                                                                <h6 className="line-height-0">Camila Lynch</h6>
                                                                <p className="medium-small blue-grey-text text-lighten-3 pt-3">Leave it</p>
                                                            </div>
                                                            <span className="secondary-content medium-small">2.00 PM</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="settings" className="col s12">
                                                <p className="setting-header mt-8 mb-3 ml-5 font-weight-900">GENERAL SETTINGS</p>
                                                <ul className="collection border-none">
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Notifications</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input checked type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Show recent activity</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Show recent activity</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Show Task statistics</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Show your emails</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Email Notifications</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input checked type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p className="setting-header mt-7 mb-3 ml-5 font-weight-900">SYSTEM SETTINGS</p>
                                                <ul className="collection border-none">
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>System Logs</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Error Reporting</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Applications Logs</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input checked type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Backup Servers</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="collection-item border-none">
                                                        <div className="m-0">
                                                            <span>Audit Logs</span>
                                                            <div className="switch right">
                                                                <label>
                                                                    <input type="checkbox" />
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="activity" className="col s12">
                                                <div className="activity">
                                                    <p className="mt-5 mb-0 ml-5 font-weight-900">SYSTEM LOGS</p>
                                                    <ul className="widget-timeline mb-0">
                                                        <li className="timeline-items timeline-icon-green active">
                                                            <div className="timeline-time">Today</div>
                                                            <h6 className="timeline-title">Homepage mockup design</h6>
                                                            <p className="timeline-text">Melissa liked your activity.</p>
                                                            <div className="timeline-content orange-text">Important</div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-cyan active">
                                                            <div className="timeline-time">10 min</div>
                                                            <h6 className="timeline-title">Melissa liked your activity Drinks.</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content green-text">Resolved</div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-red active">
                                                            <div className="timeline-time">30 mins</div>
                                                            <h6 className="timeline-title">12 new users registered</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content">
                                                                <img src="images/icon/pdf.png" alt="document" height="30" width="25"
                                                                    className="mr-1" />Registration.doc
                </div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-indigo active">
                                                            <div className="timeline-time">2 Hrs</div>
                                                            <h6 className="timeline-title">Tina is attending your activity</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content">
                                                                <img src="images/icon/pdf.png" alt="document" height="30" width="25"
                                                                    className="mr-1" />Activity.doc
                </div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-orange">
                                                            <div className="timeline-time">5 hrs</div>
                                                            <h6 className="timeline-title">Josh is now following you</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content red-text">Pending</div>
                                                        </li>
                                                    </ul>
                                                    <p className="mt-5 mb-0 ml-5 font-weight-900">APPLICATIONS LOGS</p>
                                                    <ul className="widget-timeline mb-0">
                                                        <li className="timeline-items timeline-icon-green active">
                                                            <div className="timeline-time">Just now</div>
                                                            <h6 className="timeline-title">New order received urgent</h6>
                                                            <p className="timeline-text">Melissa liked your activity.</p>
                                                            <div className="timeline-content orange-text">Important</div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-cyan active">
                                                            <div className="timeline-time">05 min</div>
                                                            <h6 className="timeline-title">System shutdown.</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content blue-text">Urgent</div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-red">
                                                            <div className="timeline-time">20 mins</div>
                                                            <h6 className="timeline-title">Database overloaded 89%</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content">
                                                                <img src="images/icon/pdf.png" alt="document" height="30" width="25"
                                                                    className="mr-1" />Database-log.doc
                </div>
                                                        </li>
                                                    </ul>
                                                    <p className="mt-5 mb-0 ml-5 font-weight-900">SERVER LOGS</p>
                                                    <ul className="widget-timeline mb-0">
                                                        <li className="timeline-items timeline-icon-green active">
                                                            <div className="timeline-time">10 min</div>
                                                            <h6 className="timeline-title">System error</h6>
                                                            <p className="timeline-text">Melissa liked your activity.</p>
                                                            <div className="timeline-content red-text">Error</div>
                                                        </li>
                                                        <li className="timeline-items timeline-icon-cyan">
                                                            <div className="timeline-time">1 min</div>
                                                            <h6 className="timeline-title">Production server down.</h6>
                                                            <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                            <div className="timeline-content blue-text">Urgent</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Slide Out Chat --> */}
                                <ul id="slide-out-chat" className="sidenav slide-out-right-sidenav-chat">
                                    <li className="center-align pt-2 pb-2 sidenav-close chat-head">
                                        <a href="#!"><i className="material-icons mr-0">chevron_left</i>Elizabeth Elliott</a>
                                    </li>
                                    <li className="chat-body">
                                        <ul className="collection">
                                            <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img src="images/avatar/avatar-7.png"
                                                    alt="avatar" />
                                                </span>
                                                <div className="user-content speech-bubble">
                                                    <p className="medium-small">hello!</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">How can we help? We're here for you!</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img src="images/avatar/avatar-7.png"
                                                    alt="avatar" />
                                                </span>
                                                <div className="user-content speech-bubble">
                                                    <p className="medium-small">I am looking for the best admin template.?</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">Materialize admin is the responsive materializecss admin template.</p>
                                                </div>
                                            </li>

                                            <li className="collection-item display-grid width-100 center-align">
                                                <p>8:20 a.m.</p>
                                            </li>

                                            <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img src="images/avatar/avatar-7.png"
                                                    alt="avatar" />
                                                </span>
                                                <div className="user-content speech-bubble">
                                                    <p className="medium-small">Ohh! very nice</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">Thank you.</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img src="images/avatar/avatar-7.png"
                                                    alt="avatar" />
                                                </span>
                                                <div className="user-content speech-bubble">
                                                    <p className="medium-small">How can I purchase it?</p>
                                                </div>
                                            </li>

                                            <li className="collection-item display-grid width-100 center-align">
                                                <p>9:00 a.m.</p>
                                            </li>

                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">From ThemeForest.</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">Only $24</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img src="images/avatar/avatar-7.png"
                                                    alt="avatar" />
                                                </span>
                                                <div className="user-content speech-bubble">
                                                    <p className="medium-small">Ohh! Thank you.</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img src="images/avatar/avatar-7.png"
                                                    alt="avatar" />
                                                </span>
                                                <div className="user-content speech-bubble">
                                                    <p className="medium-small">I will purchase it for sure.</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">Great, Feel free to get in touch on</p>
                                                </div>
                                            </li>
                                            <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                                <div className="user-content speech-bubble-right">
                                                    <p className="medium-small">https://pixinvent.ticksy.com/</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="center-align chat-footer">
                                        <form className="col s12" onSubmit="slideOutChat()" action="javascript:void(0);">
                                            <div className="input-field">
                                                <input id="icon_prefix" type="text" className="search" />
                                                <label for="icon_prefix">Type here..</label>
                                                <a onClick="slideOutChat()"><i className="material-icons prefix">send</i></a>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </aside>
                            {/* <!-- END RIGHT SIDEBAR NAV --> */}
                            <div className="fixed-action-btn direction-top"><a className="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow"><i className="material-icons">add</i></a>
                                <ul>
                                    <li><a href="css-helpers.html" className="btn-floating blue"><i className="material-icons">help_outline</i></a></li>
                                    <li><a href="cards-extended.html" className="btn-floating green"><i className="material-icons">widgets</i></a></li>
                                    <li><a href="app-calendar.html" className="btn-floating amber"><i className="material-icons">today</i></a></li>
                                    <li><a href="app-email.html" className="btn-floating red"><i className="material-icons">mail_outline</i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
