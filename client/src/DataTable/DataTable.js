import "antd/dist/antd.css";
import "../DataTable/Table.css";
import "../Modal/Form.css"
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import Navbar from "../components/Navbar/Navbar";
import Container from '../Modal/Container';

function DataTable() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "John Address",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "David Address",
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      address: "James Address",
    },
    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      address: "Sam Address",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Generic Name",
      dataIndex: "generic-name",
    },
    {
      key: "3",
      title: "Strength",
      dataIndex: "strength",
    },
    {
      key: "4",
      title: "Company",
      dataIndex: "company",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const triggerText = 'Add Data';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.value);
  };

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="DataTable">
      <Navbar />
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      <header className="App-header">
        {/* <Button onClick={onAddStudent}>Add a new Student</Button> */}
        <Table className="table-body" columns={columns} dataSource={dataSource}></Table>
        <Modal
          className="edit-modal-area"
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <div className="form-body">
            <div className="form-col">
              <div className="form-group">
                <label>Drug Name</label>
                <Input
                  required
                  className="form-ip-box"
                  value={editingStudent?.name}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, name: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Generic Name</label>
                <Input
                  required
                  className="form-ip-box"
                  value={editingStudent?.generic_name}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, generic_name: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Strength</label>
                <Input
                  required
                  className="form-ip-box"
                  value={editingStudent?.strength}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, strength: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Manufacturer</label>
                <Input
                  required
                  className="form-ip-box"
                  value={editingStudent?.company}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, company: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Unit Price</label>
                <Input
                  className="form-ip-box"
                  value={editingStudent?.price}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, price: e.target.value };
                    });
                  }}
                />
              </div>
            </div>

            <div className="form-col">
              <div className="form-group">
                <label>Indication</label>
              <Input
                className="form-ip-box"
                value={editingStudent?.indication}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, indication: e.target.value };
                  });
                }}
              />
              </div>
              <div className="form-group">
                <label>Description</label>
                <Input
                  className="form-ip-box"
                  value={editingStudent?.description}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, description: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Doses</label>
                <Input
                  className="form-ip-box"
                  value={editingStudent?.doses}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, doses: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Side Effects</label>
                <Input
                  className="form-ip-box"
                  value={editingStudent?.side_effect}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, side_effect: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Precautions</label>
                <Input
                  className="form-ip-box"
                  value={editingStudent?.precautions}
                  onChange={(e) => {
                    setEditingStudent((pre) => {
                      return { ...pre, precautions: e.target.value };
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
      </header>
    </div>
  );
}

export default DataTable;