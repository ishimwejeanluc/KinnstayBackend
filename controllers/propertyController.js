const PropertyService = require('../services/PropertyService');

class PropertyController {
    constructor() {
        this.propertyService = new PropertyService();
        
        // Bind methods to ensure 'this' refers to the class instance
        this.getAllProperties = this.getAllProperties.bind(this);
        this.getPropertyById = this.getPropertyById.bind(this);
        this.createProperty = this.createProperty.bind(this);
        this.updateProperty = this.updateProperty.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
        this.getPropertiesByHostId = this.getPropertiesByHostId.bind(this);
    }

    async getAllProperties(req, res) {
        try {
            const properties = await this.propertyService.getAllProperties();
            console.log(properties);
            res.json(properties);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPropertyById(req, res) {
        const { id } = req.params;
        try {
            const property = await this.propertyService.getPropertyById(id);
            console.log(property);
            res.json(property);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProperty(req, res) {
        try {
            const property = await this.propertyService.createProperty(req.body);
            res.status(201).json(property);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProperty(req, res) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const property = await this.propertyService.updateProperty(id, updates);
            res.json(property);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProperty(req, res) {
        const { id } = req.params;
        try {
            const message = await this.propertyService.deleteProperty(id);
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPropertiesByHostId(req, res) {
        const { host_id } = req.params;
        try {
            const properties = await this.propertyService.getPropertiesByHostId(host_id);
            if (properties.length === 0) {
                return res.status(404).json({ message: 'No properties found for this host.' });
            }
            res.json(properties);
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PropertyController(); 