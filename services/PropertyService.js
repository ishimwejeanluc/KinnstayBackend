const Property = require('../models/Property');

class PropertyService {
    async getAllProperties() {
        return await Property.findAll();
    }

    async getPropertyById(id) {
        const property = await Property.findByPk(id);
        if (!property) throw new Error('Property not found');
        return property;
    }

    async createProperty(data) {
        return await Property.create(data);
    }

    async updateProperty(id, updates) {
        const property = await Property.findByPk(id);
        if (!property) throw new Error('Property not found');

        Object.assign(property, updates);
        await property.save();
        return property;
    }

    async deleteProperty(id) {
        const property = await Property.findByPk(id);
        if (!property) throw new Error('Property not found');

        await property.destroy();
        return { message: 'Property deleted successfully' };
    }
    async getPropertiesByHostId(host_id) {
        try {
            const properties = await Property.findAll({
                where: {
                    host_id: host_id
                }
            });
            return properties;
        } catch (error) {
            throw new Error('Error retrieving properties: ' + error.message);
        }
    }
}

module.exports = PropertyService; 