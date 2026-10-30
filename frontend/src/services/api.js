// ===============================
// API BASE CONFIG
// ===============================
const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

// ===============================
// AUTH TOKEN HELPER
// ===============================
const getAuthToken = () => {
  return localStorage.getItem("adminToken");
};

// ===============================
// GENERIC API CALL
// ===============================
const apiCall = async (endpoint, options = {}) => {
  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

// ===============================
// PROJECTS API
// ===============================
export const fetchProjects = async () => {
  return apiCall("/projects");
};

export const fetchProject = async (id) => {
  return apiCall(`/projects/${id}`);
};

export const createProject = async (projectData) => {
  const formData = new FormData();

  Object.keys(projectData).forEach((key) => {
    if (key === "technologies" && Array.isArray(projectData[key])) {
      projectData[key].forEach((tech) =>
        formData.append("technologies", tech)
      );
    } else if (projectData[key] !== null && projectData[key] !== undefined) {
      formData.append(key, projectData[key]);
    }
  });

  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const updateProject = async (id, projectData) => {
  const formData = new FormData();

  Object.keys(projectData).forEach((key) => {
    if (key === "technologies" && Array.isArray(projectData[key])) {
      projectData[key].forEach((tech) =>
        formData.append("technologies", tech)
      );
    } else if (projectData[key] !== null && projectData[key] !== undefined) {
      formData.append(key, projectData[key]);
    }
  });

  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const deleteProject = async (id) => {
  return apiCall(`/projects/${id}`, { method: "DELETE" });
};

// ===============================
// SERVICES API
// ===============================
export const fetchServices = async () => {
  return apiCall("/services");
};

export const fetchService = async (id) => {
  return apiCall(`/services/${id}`);
};

export const createService = async (serviceData) => {
  const formData = new FormData();

  Object.keys(serviceData).forEach((key) => {
    if (serviceData[key] !== null && serviceData[key] !== undefined) {
      formData.append(key, serviceData[key]);
    }
  });

  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}/services`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const updateService = async (id, serviceData) => {
  const formData = new FormData();

  Object.keys(serviceData).forEach((key) => {
    if (serviceData[key] !== null && serviceData[key] !== undefined) {
      formData.append(key, serviceData[key]);
    }
  });

  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}/services/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const deleteService = async (id) => {
  return apiCall(`/services/${id}`, { method: "DELETE" });
};

// ===============================
// TESTIMONIALS API
// ===============================
export const fetchTestimonials = async () => {
  return apiCall("/testimonials");
};

export const fetchTestimonial = async (id) => {
  return apiCall(`/testimonials/${id}`);
};

export const createTestimonial = async (testimonialData) => {
  const formData = new FormData();

  Object.keys(testimonialData).forEach((key) => {
    if (testimonialData[key] !== null && testimonialData[key] !== undefined) {
      formData.append(key, testimonialData[key]);
    }
  });

  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}/testimonials`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const updateTestimonial = async (id, testimonialData) => {
  const formData = new FormData();

  Object.keys(testimonialData).forEach((key) => {
    if (testimonialData[key] !== null && testimonialData[key] !== undefined) {
      formData.append(key, testimonialData[key]);
    }
  });

  const token = getAuthToken();

  const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const deleteTestimonial = async (id) => {
  return apiCall(`/testimonials/${id}`, { method: "DELETE" });
};

// ===============================
// AUTH API
// ===============================
export const loginAdmin = async (email, password) => {
  return apiCall("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const registerAdmin = async (username, email, password) => {
  return apiCall("/auth/register", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
  });
};

export const getCurrentAdmin = async () => {
  return apiCall("/auth/me");
};
