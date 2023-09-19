import React,{useState} from 'react'
import "./styles.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paging({handlePageNo}) {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
      handlePageNo(value)
    };

  return (
    <div className="paging__main">
        <Stack spacing={2}>
            <Pagination count={10}  page={page}  onChange={handleChange} />
        </Stack>
    </div>

  )
}

export default Paging