const { GetUserbyIdDB } = require("../models/methods/user.Methods");

class NotificationsHandler {
    //common Method
    async addNotificationToUser(userID, listingId, operationType) {
        const notification = {
            listingID: listingId,
            operationType: operationType
        };
        const user = await GetUserbyIdDB(userID);
        user.Notifications.push(notification);
        await user.save();
        return user; // Optionally return the updated user object
    }
    //client end notifications
    async orderConfirmedFunction(userID, listingId, res) {
        try {
            await this.addNotificationToUser(userID, listingId, 'order confirmed');
            return res.status(200).send('Order confirmation notification added successfully!');
        } catch (err) {
            throw new err("Error occurred while sending confirmation notification")
        }
    }

    async orderDeniedFunction(userID, listingId, res) {
        try {
            await this.addNotificationToUser(userID, listingId, 'order denied');
            return res.status(200).send('Order denied notification added successfully!');

        } catch (err) {
            throw new err('Error occured wile sending denial notification')
        }
    }
    //publisher end notifications
    async newOrderFunction(userID, listingId, res) {
        try {
            await this.addNotificationToUser(userID, listingId, 'new order');
            return res.status(200).send('New order notification added successfully!');

        } catch (err) {
            throw new err("Error occurred while sending new order notification")
        }
    }

    async orderCanceledFunction(userID, listingId, res) {
        try {
            await this.addNotificationToUser(userID, listingId, 'order canceled');
            return res.status(200).send('Order canceled notification added successfully!');

        } catch (err) {
            throw new err('Error occured wile sending cencelation notification')
        }
    }
}

module.exports = new NotificationsHandler();
