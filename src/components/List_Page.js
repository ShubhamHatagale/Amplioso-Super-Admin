import React from 'react'

export const List_Page = () => {
    return (
        <div>
            <div class="card-content">
                <h4 class="card-title">Page Length Options</h4>
                <div class="row">
                    <div class="col s12">
                        <div id="page-length-option_wrapper" class="dataTables_wrapper">
                            <div class="dataTables_length" id="page-length-option_length">
                                <label>Show
                                    <select name="page-length-option_length" aria-controls="page-length-option" class="">
                                        <option value="10">
                                            10
                                            </option>
                                        <option value="25">
                                            25
                                                </option>
                                        <option value="50">
                                            50
                                                    </option>
                                        <option value="-1">
                                            All
                                                        </option>
                                    </select>
                                                        entries
                                                        </label>
                            </div>
                            <div id="page-length-option_filter" class="dataTables_filter">
                                <label>
                                    Search:
                                                                <input type="search" class="" placeholder="" aria-controls="page-length-option" />
                                </label>
                            </div>
                            <table id="page-length-option" class="display dataTable dtr-inline" role="grid" aria-describedby="page-length-option_info" style={{ width: "981px" }}>
                                <thead>
                                    <tr role="row"><th class="sorting" tabindex="0" aria-controls="page-length-option" rowspan="1" colspan="1" style={{ swidth: "163px" }} aria-label="Name: activate to sort column ascending">Name</th><th class="sorting_desc" tabindex="0" aria-controls="page-length-option" rowspan="1" colspan="1" style={{ width: "243px" }} aria-label="Position: activate to sort column ascending" aria-sort="descending">Position</th><th class="sorting" tabindex="0" aria-controls="page-length-option" rowspan="1" colspan="1" style={{ width: "115px" }} aria-label="Office: activate to sort column ascending">Office</th><th class="sorting" tabindex="0" aria-controls="page-length-option" rowspan="1" colspan="1" style={{ width: "48px" }} aria-label="Age: activate to sort column ascending">Age</th><th class="sorting" tabindex="0" aria-controls="page-length-option" rowspan="1" colspan="1" style={{ width: "103px" }} aria-label="Start date: activate to sort column ascending">Start date</th><th class="sorting" tabindex="0" aria-controls="page-length-option" rowspan="1" colspan="1" style={{ width: "93px" }} aria-label="Salary: activate to sort column ascending">Salary</th></tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd">
                                        <td class="" tabindex="0">Prescott Bartlett</td>
                                        <td class="sorting_1">Technical Author</td>
                                        <td>London</td>
                                        <td>27</td>
                                        <td>2011/05/07</td>
                                        <td>$145,000</td>
                                    </tr><tr role="row" class="even">
                                        <td class="" tabindex="0">Gavin Cortez</td>
                                        <td class="sorting_1">Team Leader</td>
                                        <td>San Francisco</td>
                                        <td>22</td>
                                        <td>2008/10/26</td>
                                        <td>$235,500</td>
                                    </tr><tr role="row" class="odd">
                                        <td class="" tabindex="0">Gloria Little</td>
                                        <td class="sorting_1">Systems Administrator</td>
                                        <td>New York</td>
                                        <td>59</td>
                                        <td>2009/04/10</td>
                                        <td>$237,500</td>
                                    </tr><tr role="row" class="even">
                                        <td class="" tabindex="0">Lael Greer</td>
                                        <td class="sorting_1">Systems Administrator</td>
                                        <td>London</td>
                                        <td>21</td>
                                        <td>2009/02/27</td>
                                        <td>$103,500</td>
                                    </tr><tr role="row" class="odd">
                                        <td tabindex="0" class="">Tiger Nixon</td>
                                        <td class="sorting_1">System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr><tr role="row" class="even">
                                        <td class="" tabindex="0">Quinn Flynn</td>
                                        <td class="sorting_1">Support Lead</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2013/03/03</td>
                                        <td>$342,000</td>
                                    </tr><tr role="row" class="odd">
                                        <td class="" tabindex="0">Finn Camacho</td>
                                        <td class="sorting_1">Support Engineer</td>
                                        <td>San Francisco</td>
                                        <td>47</td>
                                        <td>2009/07/07</td>
                                        <td>$87,500</td>
                                    </tr><tr role="row" class="even">
                                        <td class="" tabindex="0">Olivia Liang</td>
                                        <td class="sorting_1">Support Engineer</td>
                                        <td>Singapore</td>
                                        <td>64</td>
                                        <td>2011/02/03</td>
                                        <td>$234,500</td>
                                    </tr><tr role="row" class="odd">
                                        <td class="" tabindex="0">Sakura Yamamoto</td>
                                        <td class="sorting_1">Support Engineer</td>
                                        <td>Tokyo</td>
                                        <td>37</td>
                                        <td>2009/08/19</td>
                                        <td>$139,575</td>
                                    </tr><tr role="row" class="even">
                                        <td class="" tabindex="0">Bradley Greer</td>
                                        <td class="sorting_1">Software Engineer</td>
                                        <td>London</td>
                                        <td>41</td>
                                        <td>2012/10/13</td>
                                        <td>$132,000</td>
                                    </tr></tbody>
                                <tfoot>
                                    <tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1">Age</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">Salary</th></tr>
                                </tfoot>
                            </table><div class="dataTables_info" id="page-length-option_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div><div class="dataTables_paginate paging_simple_numbers" id="page-length-option_paginate"><a class="paginate_button previous disabled" aria-controls="page-length-option" data-dt-idx="0" tabindex="-1" id="page-length-option_previous">Previous</a><span><a class="paginate_button current" aria-controls="page-length-option" data-dt-idx="1" tabindex="0">1</a><a class="paginate_button " aria-controls="page-length-option" data-dt-idx="2" tabindex="0">2</a><a class="paginate_button " aria-controls="page-length-option" data-dt-idx="3" tabindex="0">3</a><a class="paginate_button " aria-controls="page-length-option" data-dt-idx="4" tabindex="0">4</a><a class="paginate_button " aria-controls="page-length-option" data-dt-idx="5" tabindex="0">5</a><a class="paginate_button " aria-controls="page-length-option" data-dt-idx="6" tabindex="0">6</a></span><a class="paginate_button next" aria-controls="page-length-option" data-dt-idx="7" tabindex="0" id="page-length-option_next">Next</a></div></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default List_Page;