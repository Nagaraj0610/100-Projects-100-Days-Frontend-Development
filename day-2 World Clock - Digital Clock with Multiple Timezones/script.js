/**
 * World Clock Application
 * A digital clock that displays multiple timezones with the ability to add/remove them dynamically
 */

class WorldClock {
    constructor() {
        this.is24Hour = false;
        this.activeTimezones = new Set();
        this.clockInterval = null;
        
        this.initializeElements();
        this.bindEvents();
        this.addDefaultTimezones();
        this.startClock();
    }
    
    /**
     * Initialize DOM elements
     */
    initializeElements() {
        this.formatToggle = document.getElementById('formatToggle');
        this.timezoneSelect = document.getElementById('timezoneSelect');
        this.addButton = document.getElementById('addTimezone');
        this.clocksContainer = document.getElementById('clocksContainer');
    }
    
    /**
     * Bind event listeners
     */
    bindEvents() {
        this.formatToggle.addEventListener('click', () => this.toggleTimeFormat());
        this.addButton.addEventListener('click', () => this.addTimezone());
    }
    
    /**
     * Add default timezones on initialization
     */
    addDefaultTimezones() {
        const defaultTimezones = [
            'Asia/Kolkata',      // India
            'America/New_York',  // New York
            'Europe/London',     // London
            'Asia/Tokyo'         // Tokyo
        ];
        
        defaultTimezones.forEach(timezone => {
            this.addTimezoneCard(timezone);
        });
    }
    
    /**
     * Toggle between 12-hour and 24-hour time format
     */
    toggleTimeFormat() {
        this.is24Hour = !this.is24Hour;
        this.formatToggle.textContent = this.is24Hour ? '24 Hour Format' : '12 Hour Format';
        this.updateAllClocks();
    }
    
    /**
     * Add a new timezone from the dropdown selection
     */
    addTimezone() {
        const selectedTimezone = this.timezoneSelect.value;
        
        if (!selectedTimezone) {
            alert('Please select a timezone first!');
            return;
        }
        
        if (this.activeTimezones.has(selectedTimezone)) {
            alert('This timezone is already added!');
            return;
        }
        
        this.addTimezoneCard(selectedTimezone);
        this.timezoneSelect.value = '';
    }
    
    /**
     * Create and add a timezone card to the DOM
     * @param {string} timezone - The timezone identifier
     */
    addTimezoneCard(timezone) {
        this.activeTimezones.add(timezone);
        
        const clockCard = document.createElement('div');
        clockCard.className = 'clock-card';
        clockCard.setAttribute('data-timezone', timezone);
        
        // Check if this is the user's local timezone
        const isLocal = timezone === Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        clockCard.innerHTML = `
            ${isLocal ? '<div class="current-time-indicator"></div>' : ''}
            <div class="timezone-name">${this.formatTimezoneName(timezone)}</div>
            <div class="time-display" id="time-${timezone.replace(/[\/\s]/g, '_')}">--:--:--</div>
            <div class="date-display" id="date-${timezone.replace(/[\/\s]/g, '_')}">Loading...</div>
            <button class="remove-btn" onclick="worldClock.removeTimezone('${timezone}')">&times;</button>
        `;
        
        this.clocksContainer.appendChild(clockCard);
        this.updateClock(timezone);
    }
    
    /**
     * Remove a timezone card from the DOM
     * @param {string} timezone - The timezone identifier to remove
     */
    removeTimezone(timezone) {
        this.activeTimezones.delete(timezone);
        const clockCard = document.querySelector(`[data-timezone="${timezone}"]`);
        if (clockCard) {
            clockCard.remove();
        }
    }
    
    /**
     * Format timezone name for display
     * @param {string} timezone - The timezone identifier
     * @returns {string} Formatted timezone name
     */
    formatTimezoneName(timezone) {
        const parts = timezone.split('/');
        const city = parts[parts.length - 1].replace(/_/g, ' ');
        return city;
    }
    
    /**
     * Update the time display for a specific timezone
     * @param {string} timezone - The timezone identifier
     */
    updateClock(timezone) {
        try {
            const now = new Date();
            const timeId = `time-${timezone.replace(/[\/\s]/g, '_')}`;
            const dateId = `date-${timezone.replace(/[\/\s]/g, '_')}`;
            
            const timeElement = document.getElementById(timeId);
            const dateElement = document.getElementById(dateId);
            
            if (!timeElement || !dateElement) return;
            
            // Format time options
            const timeOptions = {
                timeZone: timezone,
                hour12: !this.is24Hour,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            
            // Format date options
            const dateOptions = {
                timeZone: timezone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            
            const timeString = now.toLocaleTimeString('en-US', timeOptions);
            const dateString = now.toLocaleDateString('en-US', dateOptions);
            
            timeElement.textContent = timeString;
            dateElement.textContent = dateString;
            
        } catch (error) {
            console.error('Error updating clock for timezone:', timezone, error);
        }
    }
    
    /**
     * Update all active clocks
     */
    updateAllClocks() {
        this.activeTimezones.forEach(timezone => {
            this.updateClock(timezone);
        });
    }
    
    /**
     * Start the clock with real-time updates
     */
    startClock() {
        // Update immediately
        this.updateAllClocks();
        
        // Update every second
        this.clockInterval = setInterval(() => {
            this.updateAllClocks();
        }, 1000);
    }
    
    /**
     * Stop the clock and clear the interval
     */
    stopClock() {
        if (this.clockInterval) {
            clearInterval(this.clockInterval);
        }
    }
}

// Global variable to access the clock instance
let worldClock;

/**
 * Initialize the world clock when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    worldClock = new WorldClock();
});

/**
 * Clean up when the page is unloaded
 */
window.addEventListener('beforeunload', () => {
    if (worldClock) {
        worldClock.stopClock();
    }
});