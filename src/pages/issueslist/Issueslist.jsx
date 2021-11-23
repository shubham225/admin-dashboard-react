import "./issueslist.css"
import { DataGrid } from '@mui/x-data-grid';
import { Data } from "../../DummyData"

export default function Issueslist() {

    const Button = ({type}) => {
        return(
            <button className={"status " + type}>{type}</button>
        )
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'customer', headerName: 'Customer', width: 130 },
        { field: 'issuetype', headerName: 'Type', width: 130 },
        { field: 'reportedtime', headerName: 'Reported', width: 130 },
        { field: 'status', headerName: 'Status', width: 110, renderCell: (params)=>{
            return(
                <Button type={params.row.status}/>
            )
            } 
        },
        { field: 'assignedto', headerName: 'Assigned To', width: 130 },
      ];

    return (
        <div className="issueList"> 
        <DataGrid
                rows={Data}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
