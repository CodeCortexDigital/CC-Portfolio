import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  fetchServices,
  createService,
  updateService,
  deleteService,
  fetchTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../../services/api";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }
    loadData();
  }, [navigate, activeTab]);

  const loadData = async () => {
    try {
      setLoading(true);
      if (activeTab === "projects") {
        const data = await fetchProjects();
        setProjects(data);
      } else if (activeTab === "services") {
        const data = await fetchServices();
        setServices(data);
      } else if (activeTab === "testimonials") {
        const data = await fetchTestimonials();
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      if (activeTab === "projects") {
        await deleteProject(id);
        setProjects(projects.filter((p) => p._id !== id));
      } else if (activeTab === "services") {
        await deleteService(id);
        setServices(services.filter((s) => s._id !== id));
      } else if (activeTab === "testimonials") {
        await deleteTestimonial(id);
        setTestimonials(testimonials.filter((t) => t._id !== id));
      }
    } catch (error) {
      alert("Error deleting item: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "technologies" && Array.isArray(formData[key])) {
          formData[key].forEach((tech) => formDataToSend.append("technologies", tech));
        } else if (key === "features" && Array.isArray(formData[key])) {
          formData[key].forEach((feature) => formDataToSend.append("features", feature));
        } else if (key === "image" && formData[key] instanceof File) {
          formDataToSend.append("image", formData[key]);
        } else if (formData[key] !== null && formData[key] !== undefined) {
          formDataToSend.append(key, formData[key]);
        }
      });

      if (activeTab === "projects") {
        if (editingItem) {
          await updateProject(editingItem._id, formDataToSend);
        } else {
          await createProject(formDataToSend);
        }
      } else if (activeTab === "services") {
        if (editingItem) {
          await updateService(editingItem._id, formDataToSend);
        } else {
          await createService(formDataToSend);
        }
      } else if (activeTab === "testimonials") {
        if (editingItem) {
          await updateTestimonial(editingItem._id, formDataToSend);
        } else {
          await createTestimonial(formDataToSend);
        }
      }

      setShowForm(false);
      setEditingItem(null);
      setFormData({});
      loadData();
    } catch (error) {
      alert("Error saving item: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name === "technologies") {
      setFormData({
        ...formData,
        technologies: value.split(",").map((t) => t.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const getFormFields = () => {
    if (activeTab === "projects") {
      return (
        <>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>
          <div className="form-group">
            <label>Technologies (comma-separated)</label>
            <input
              type="text"
              name="technologies"
              value={
                Array.isArray(formData.technologies)
                  ? formData.technologies.join(", ")
                  : ""
              }
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          <div className="form-group">
            <label>Live Link</label>
            <input
              type="url"
              name="liveLink"
              value={formData.liveLink || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>GitHub Link</label>
            <input
              type="url"
              name="githubLink"
              value={formData.githubLink || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured || false}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
              />
              Featured Project
            </label>
          </div>
        </>
      );
    } else if (activeTab === "services") {
      return (
        <>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>
          <div className="form-group">
            <label>Icon (Font Awesome class)</label>
            <input
              type="text"
              name="icon"
              value={formData.icon || ""}
              onChange={handleChange}
              placeholder="fas fa-code"
            />
            <small style={{ color: "#666", fontSize: "12px" }}>Example: fas fa-code, fas fa-mobile-alt, fas fa-brain, fas fa-cloud</small>
          </div>
          <div className="form-group">
            <label>Features (one per line or comma-separated)</label>
            <textarea
              name="features"
              value={
                Array.isArray(formData.features)
                  ? formData.features.join("\n")
                  : formData.features || ""
              }
              onChange={(e) => {
                const features = e.target.value
                  .split(/[,\n]/)
                  .map((f) => f.trim())
                  .filter((f) => f);
                setFormData({ ...formData, features });
              }}
              rows="4"
              placeholder="Custom Web Applications&#10;E-commerce Solutions&#10;CMS Development&#10;API Integration"
            />
            <small style={{ color: "#666", fontSize: "12px" }}>Enter each feature on a new line or separated by commas</small>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
              placeholder="Starting at $99"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
          </div>
        </>
      );
    } else if (activeTab === "testimonials") {
      return (
        <>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role *</label>
            <input
              type="text"
              name="role"
              value={formData.role || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>
          <div className="form-group">
            <label>Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating || 5}
              onChange={handleChange}
              min="1"
              max="5"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
          </div>
        </>
      );
    }
  };

  const renderItems = () => {
    const items = activeTab === "projects" ? projects : activeTab === "services" ? services : testimonials;

    if (loading) return <div className="loading">Loading...</div>;
    if (items.length === 0) return <div className="empty-state">No items found</div>;

    return (
      <div className="admin-items-list">
        {items.map((item) => (
          <div key={item._id} className="admin-item-card">
            <div className="admin-item-content">
              <h3>{item.title || item.name}</h3>
              <p>{item.description || item.message}</p>
            </div>
            <div className="admin-item-actions">
              <button onClick={() => handleEdit(item)} className="btn-edit">
                Edit
              </button>
              <button onClick={() => handleDelete(item._id)} className="btn-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>

      <div className="admin-tabs">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={activeTab === "services" ? "active" : ""}
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>
        <button
          className={activeTab === "testimonials" ? "active" : ""}
          onClick={() => setActiveTab("testimonials")}
        >
          Testimonials
        </button>
      </div>

      <div className="admin-content">
        <div className="admin-actions">
          <button
            onClick={() => {
              setShowForm(true);
              setEditingItem(null);
              setFormData({});
            }}
            className="btn-primary"
          >
            Add New {activeTab.slice(0, -1)}
          </button>
        </div>

        {showForm && (
          <div className="admin-form-modal">
            <div className="admin-form-content">
              <h2>{editingItem ? "Edit" : "Add New"} {activeTab.slice(0, -1)}</h2>
              <form onSubmit={handleSubmit}>
                {getFormFields()}
                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    {editingItem ? "Update" : "Create"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingItem(null);
                      setFormData({});
                    }}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {renderItems()}
      </div>
    </div>
  );
}

export default AdminDashboard;

