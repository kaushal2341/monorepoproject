import React, { PureComponent } from 'react'
import { AgGridReact} from 'ag-grid-react'
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import PropTypes from 'prop-types';
class CDataTable extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      gridApi: '',
      rowChanged: []
    }
  }

  onGridReady = params => {
    console.log(params)  
    this.setState({
      gridApi: params
    })
  }

  checkDataAndFilterTheData = event => {
    let datum = [...this.state.rowChanged]
    for (let i = 0; i < this.props.rowData.length; i++) {
      if (datum.length > i) {
        if (datum[i].id === event.data.id) {
          datum[i] = { ...event.data }
          break
        }
      } else {
        datum[i] = { ...event.data }
        break
      }
    }
    return datum;
  }

  onCellValueChanged = e => {
    let data = this.checkDataAndFilterTheData(e)
    this.setState({
        rowChanged:data
    })
  }
   
  onSelectionChanged = (row) => {
    this.props.onSelectionChanged(row.api.getSelectedRows()[0])
  }

  render () {
    const {
      id,
      tableId,
      width,
      height,
      classes,
      enableSorting,
      columnDefs,
      rowData,
      defaultColDef,
      rowSelection,
      frameworkComponents,
      floatingFilter,
      editType
     } = this.props
    return (
      <>
        <div
          style={{ width: width, height: height }}
          className={classes}
          id={id}
        >
          <AgGridReact
            id={tableId}
            enableSorting={enableSorting}
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={this.onGridReady}
            rowSelection={rowSelection}
            frameworkComponents={frameworkComponents}
            floatingFilter={floatingFilter}
            editType={editType}
            onSelectionChanged={(e)=>this.onSelectionChanged(e)}
            onCellValueChanged={(e)=>this.onCellValueChanged(e)}
          />
        </div>
      </>
    )
  }
}

export default CDataTable;

