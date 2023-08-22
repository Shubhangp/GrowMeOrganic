import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

const data: Department[] = [
  {
    "department": "customer_service",
    "sub_departments": ["support", "customer_success"]
  },
  {
    "department": "design",
    "sub_departments": ["graphic_design", "product_design", "web_design"]
  }
];

const DepartmentList = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleExpandCollapse = (department: string) => {
    if (expanded === department) {
      setExpanded(null);
    } else {
      setExpanded(department);
    }
  };

  const handleSelect = (department: string) => {
    const isSelected = selectedDepartments.includes(department);
    if (isSelected) {
      setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  const handleSelectAll = (subDepartments: string[]) => {
    const allSelected = subDepartments.every(subDep => selectedDepartments.includes(subDep));
    if (allSelected) {
      setSelectedDepartments(selectedDepartments.filter(dep => !subDepartments.includes(dep)));
    } else {
      setSelectedDepartments([...selectedDepartments, ...subDepartments]);
    }
  };

  return (
    <List>
      {data.map(department => (
        <div key={department.department}>
          <ListItem onClick={() => handleExpandCollapse(department.department)}>
            <ListItemIcon>
              {expanded === department.department ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={department.department} />
            <Checkbox
              edge="end"
              onChange={() => handleSelectAll(department.sub_departments)}
              checked={department.sub_departments.every(subDep => selectedDepartments.includes(subDep))}
              indeterminate={
                department.sub_departments.some(subDep => selectedDepartments.includes(subDep)) &&
                !department.sub_departments.every(subDep => selectedDepartments.includes(subDep))
              }
            />
          </ListItem>
          <Collapse in={expanded === department.department} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map(subDep => (
                <ListItem key={subDep} onClick={() => handleSelect(subDep)} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedDepartments.includes(subDep)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDep} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
