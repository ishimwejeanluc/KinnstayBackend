const PropertyService = require('../services/PropertyService');

class PropertyController {
    async getAllProperties(req, res) {
        try {
            const properties = await PropertyService.getAllProperties();
            res.json(properties);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPropertyById(req, res) {
        const { id } = req.params;
        try {
            const property = await PropertyService.getPropertyById(id);
            res.json(property);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProperty(req, res) {
        try {
            const property = await PropertyService.createProperty(req.body);
            res.status(201).json(property);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProperty(req, res) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const property = await PropertyService.updateProperty(id, updates);
            res.json(property);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProperty(req, res) {
        const { id } = req.params;
        try {
            const message = await PropertyService.deleteProperty(id);
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getPropertiesByHostId(req, res) {
        const { host_id } = req.params; // Get host_id from request parameters
        try {
            const properties = await PropertyService.getPropertiesByHostId(host_id);
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