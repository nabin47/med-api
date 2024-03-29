import "antd/dist/antd.css";
import { Table, Modal, Input } from "antd";
import { useState, useEffect ,useReducer} from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../components/Modal/Form.css"
import "./Table.css";
import NavBar from "../../components/Navbar/Navbar";
import Container from "../../components/Modal/Container";

function DataTable() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingMed, setEditingMed] = useState(null);
  const [dataSource, setDataSource] = useState("");
  const [reducerValue, forceUpdate]= useReducer(x => x+1,0);
  useEffect(() => {
    const url = "/getmed";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setDataSource(json);
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchData();
  }, [reducerValue]);
  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Generic Name",
      dataIndex: "generic_name",
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
 
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this medicine info?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        fetch('/delete/' + record._id,{
          method: 'DELETE'
      }).then((resp)=> resp.text());
      forceUpdate()
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingMed({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingMed(null);
  };
  return (
    <div className="DataTable">
      <NavBar />
      <div className="dataTable-body-with-add">

        <Container triggerText={triggerText}  forceUpdate={forceUpdate} />
        <header className="App-header">
          <Table columns={columns} dataSource={dataSource}></Table>
          <Modal
            title="Edit Medicine"
            visible={isEditing}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
            onOk={() => {
              fetch('/update/'+ editingMed._id, {
          method: 'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(editingMed)
      }).then((resp)=> resp.text());
              forceUpdate()
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
                    value={editingMed?.name}
                    onChange={(e) => {
                      setEditingMed((pre) => {
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
                    value={editingMed?.generic_name}
                    onChange={(e) => {
                      setEditingMed((pre) => {
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
                    value={editingMed?.strength}
                    onChange={(e) => {
                      setEditingMed((pre) => {
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
                    value={editingMed?.company}
                    onChange={(e) => {
                      setEditingMed((pre) => {
                        return { ...pre, company: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Unit Price</label>
                  <Input
                    className="form-ip-box"
                    value={editingMed?.price}
                    onChange={(e) => {
                      setEditingMed((pre) => {
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
                  value={editingMed?.indication}
                  onChange={(e) => {
                    setEditingMed((pre) => {
                      return { ...pre, indication: e.target.value };
                    });
                  }}
                />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <Input
                    className="form-ip-box"
                    value={editingMed?.description}
                    onChange={(e) => {
                      setEditingMed((pre) => {
                        return { ...pre, description: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Doses</label>
                  <Input
                    className="form-ip-box"
                    value={editingMed?.doses}
                    onChange={(e) => {
                      setEditingMed((pre) => {
                        return { ...pre, doses: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Side Effects</label>
                  <Input
                    className="form-ip-box"
                    value={editingMed?.side_effect}
                    onChange={(e) => {
                      setEditingMed((pre) => {
                        return { ...pre, side_effect: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Precautions</label>
                  <Input
                    className="form-ip-box"
                    value={editingMed?.precautions}
                    onChange={(e) => {
                      setEditingMed((pre) => {
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
    </div>
  );
}

export default DataTable;