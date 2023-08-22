import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentList from './DepartmentList';
import DataTable from './DataTable';
import RootTable from '../Interface';

const SecondPage = () => {
    const [data, setData] = useState<RootTable[]>([]);

    useEffect(() => {
        getData().then(item => setData(item));
    }, [])

    const getData= async(): Promise<RootTable[]> => {
        return await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
    }

    const navigate = useNavigate();
    const formDetail = JSON.parse(localStorage.getItem('form') || '{}');
    // console.log(formDetail);
    
    if (!formDetail.name || !formDetail.phone || !formDetail.email) {
        alert('Please SignUp first');
        navigate('/');
        return null;
    }

    return (
        <>
            <h1>Table Data</h1>
            <DataTable table={data} />
            <h1>Select Department</h1>
            <DepartmentList />
        </>
    )
}

export default SecondPage;