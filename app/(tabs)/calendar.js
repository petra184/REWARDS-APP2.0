import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDropdown from '../utils/CustomDropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Component() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8)); 
  const [selectedSport, setSelectedSport] = useState('');

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const sportOptions = [
      { label: "Women's Basketball", value: "Women's Basketball" },
      { label: "Women's Cross Country", value: "Women's Cross Country" },
      { label: "Women's Lacrosse", value: "Women's Lacrosse" },
      { label: "Women's Soccer", value: "Women's Soccer" },
      { label: "Women's Softball", value: "Women's Softball" },
      { label: "Women's Swimming & Diving", value: "Women's Swimming & Diving" },
      { label: "Women's Track & Field", value: "Women's Track & Field" },
      { label: "Women's Volleyball", value: "Women's Volleyball" },
      { label: "Men's Baseball", value: "Men's Baseball" },
      { label: "Men's Basketball", value: "Men's Basketball" },
      { label: "Men's Cross Country", value: "Men's Cross Country" },
      { label: "Men's Golf", value: "Men's Golf" },
      { label: "Men's Lacrosse", value: "Men's Lacrosse" },
      { label: "Men's Soccer", value: "Men's Soccer" },
      { label: "Men's Swimming & Diving", value: "Men's Swimming & Diving" },
      { label: "Men's Track & Field", value: "Men's Track & Field" },
      { label: "All Sports", value: "All Sports" },
  ];

  const events = [
    { date: 5, sport: 'basketball' },
    { date: 9, sport: 'swimming' },
    { date: 20, sport: 'baseball' },
    { date: 21, sport: 'volleyball' },
    { date: 26, sport: 'soccer' },
  ];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const days = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const event = events.find(e => e.date === day);
      days.push(
        <View key={day} style={styles.dayCell}>
          <Text style={styles.dayText}>{day}</Text>
          {event && <Ionicons name="checkmark" size={20} color="#4CAF50" />}
        </View>
      );
    }
    
    return days;
  };

  const previousMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  return (
    <View style={styles.mainContainer}>
      <View style={styles.selectorContainer}>
        <CustomDropdown
          options={sportOptions}
          selectedValue={selectedSport}
          onValueChange={setSelectedSport}
        />
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={previousMonth}>
            <Ionicons name="chevron-back" size={24} color="#006400" />
          </TouchableOpacity>
          <Text style={styles.monthText}>
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </Text>
          <TouchableOpacity onPress={nextMonth}>
            <Ionicons name="chevron-forward" size={24} color="#006400" />
          </TouchableOpacity>
        </View>

        <View style={styles.weekDaysContainer}>
          {daysOfWeek.map(day => (
            <Text key={day} style={styles.weekDayText}>{day}</Text>
          ))}
        </View>

        <View style={styles.daysContainer}>{renderCalendarDays()}</View>
        <View style={styles.bottomPadding} />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.iconButton}>
          <MaterialCommunityIcons name="bell-badge" size={24} color="white" />
          </View>
          <Text style={styles.buttonText}>Set a Reminder for a Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.iconButton}>
            <Ionicons name="ticket" size={23} color="white" />
          </View>
          <Text style={styles.buttonText}>Buy a Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: 'white',
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    gap: 12,
    elevation: 2, // For Android
    zIndex: 2, // Higher z-index to be above the calendar
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 40,
    borderWidth: 1, // Add border width
    borderColor: '#ccc', // Light gray border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // For Android
    paddingBottom: 10, // Padding to provide space at the bottom
    zIndex: 1, // Lower z-index to send it behind the dropdown
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e8f5e9',
  },
  monthText: { fontSize: 16, fontWeight: '600', color: '#006400' },
  weekDaysContainer: { flexDirection: 'row', backgroundColor: 'white' },
  weekDayText: { flex: 1, textAlign: 'center', padding: 10, fontSize: 14, color: '#333' },
  daysContainer: { flexDirection: 'row', flexWrap: 'wrap', padding: 5 },
  dayCell: { width: '14.28%', padding: 2, alignItems: 'center' },
  dayText: { fontSize: 14, color: '#333' },
  bottomPadding: { height: 10 }, // Padding to give space below the calendar

  // New styles for buttons
  buttonsContainer: {
    marginTop: 20, // Space between calendar and buttons
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 12,
  },
  iconButton: {
    backgroundColor: '#035e32', 
    borderRadius: 50, 
    padding: 8,
    marginRight: 10, 
  },
  buttonText: {
    color: '#035e32',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
