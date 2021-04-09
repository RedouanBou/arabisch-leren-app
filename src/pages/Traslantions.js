import React, { PureComponent } from 'react';
import '../App.css';

import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class Traslations extends PureComponent {
    constructor(props) {
		super(props);

		this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 8,
            currentPage: 0
		}

        this.handlePageClick = this.handlePageClick.bind(this);
	}

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });
    };

    loadMoreData() {
		const data = this.state.orgtableData;
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
    }

    componentDidMount() {
		this.getData();
	}

    getData() {
        axios
            .get("https://sheet.best/api/sheets/20ea87ab-3cc5-41a7-a007-dbb4644c8923")
            .then(res => {
                var data = res.data;
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice
                })
            });
    }

    render() {
        return(
            <Container className="p-0 mt-5">
                <h1>Arabisch</h1>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Vertaling</th>
                            <th>Uitspraak</th>
                            <th>Arabisch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
							this.state.tableData.map((obj, i) => {
								return (
									<tr>
											<td>{obj.vertaling}</td>
											<td>{obj.uitspraak}</td>
											<td>{obj.arabisch}</td>
									</tr>	
								)
							})
						}
                    </tbody>
                </Table>

                <ReactPaginate 
                    previousLabel={"Vorige"}
                    nextLabel={"Volgende"}
                    breakLabel={"..."}
                    breakClassName={"break-me pagination page-item"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </Container>
        );
    }
}

export default Traslations;