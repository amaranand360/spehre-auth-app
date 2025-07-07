import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const quickActions = [
    { id: 1, title: 'Find Peers', icon: 'people', color: '#FF6B6B' },
    { id: 2, title: 'Internships', icon: 'work', color: '#4ECDC4' },
    { id: 3, title: 'Job Opportunities', icon: 'business-center', color: '#45B7D1' },
    { id: 4, title: 'Study Groups', icon: 'school', color: '#96CEB4' },
  ];

  const recentActivities = [
    { id: 1, title: 'New internship at Google', time: '2 hours ago', type: 'internship' },
    { id: 2, title: 'Study group for Data Structures', time: '4 hours ago', type: 'study' },
    { id: 3, title: 'Job opening at Microsoft', time: '1 day ago', type: 'job' },
  ];

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            setShowProfileMenu(false);
            navigation.navigate('Auth');
          },
        },
      ]
    );
  };

  const renderHomeContent = () => (
    <>
      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statsCard}>
          <Text style={styles.statsNumber}>12</Text>
          <Text style={styles.statsLabel}>Connections</Text>
        </View>
        <View style={styles.statsCard}>
          <Text style={styles.statsNumber}>5</Text>
          <Text style={styles.statsLabel}>Applications</Text>
        </View>
        <View style={styles.statsCard}>
          <Text style={styles.statsNumber}>3</Text>
          <Text style={styles.statsLabel}>Study Groups</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsGrid}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={styles.actionCard}>
              <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
                <Icon name={action.icon} size={24} color="white" />
              </View>
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activitiesContainer}>
          {recentActivities.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityCard}>
              <View style={styles.activityIcon}>
                <Icon
                  name={activity.type === 'internship' ? 'work' : activity.type === 'study' ? 'school' : 'business-center'}
                  size={20}
                  color="#1E90FF"
                />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
              <Icon name="chevron-right" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

     
    </>
  );

  const renderExploreContent = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Explore Opportunities</Text>
      <View style={styles.exploreGrid}>
        <TouchableOpacity style={styles.exploreCard}>
          <Icon name="work" size={40} color="#4ECDC4" />
          <Text style={styles.exploreTitle}>Internships</Text>
          <Text style={styles.exploreSubtitle}>25 new opportunities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreCard}>
          <Icon name="school" size={40} color="#96CEB4" />
          <Text style={styles.exploreTitle}>Courses</Text>
          <Text style={styles.exploreSubtitle}>15 trending courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreCard}>
          <Icon name="people" size={40} color="#FF6B6B" />
          <Text style={styles.exploreTitle}>Study Groups</Text>
          <Text style={styles.exploreSubtitle}>8 active groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreCard}>
          <Icon name="event" size={40} color="#45B7D1" />
          <Text style={styles.exploreTitle}>Events</Text>
          <Text style={styles.exploreSubtitle}>12 upcoming events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderMessagesContent = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Messages</Text>
      <View style={styles.messagesContainer}>
        {[
          { id: 1, name: 'Sarah Johnson', message: 'Hey! Are you joining the study group?', time: '2m ago', unread: true },
          { id: 2, name: 'Tech Meetup Group', message: 'Reminder: Event tomorrow at 6 PM', time: '1h ago', unread: true },
          { id: 3, name: 'John Smith', message: 'Thanks for the internship tip!', time: '3h ago', unread: false },
          { id: 4, name: 'Career Services', message: 'New job opportunities available', time: '1d ago', unread: false },
        ].map((message) => (
          <TouchableOpacity key={message.id} style={styles.messageCard}>
            <View style={styles.messageAvatar}>
              <Icon name="account-circle" size={40} color="#1E90FF" />
            </View>
            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.messageName}>{message.name}</Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <Text style={[styles.messageText, message.unread && styles.unreadMessage]}>
                {message.message}
              </Text>
            </View>
            {message.unread && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderProfileContent = () => (
    <View style={styles.section}>
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Icon name="account-circle" size={80} color="#1E90FF" />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
            <Text style={styles.profileCollege}>MIT University</Text>
          </View>
        </View>

        <View style={styles.profileStats}>
          <View style={styles.profileStatItem}>
            <Text style={styles.profileStatNumber}>156</Text>
            <Text style={styles.profileStatLabel}>Connections</Text>
          </View>
          <View style={styles.profileStatItem}>
            <Text style={styles.profileStatNumber}>23</Text>
            <Text style={styles.profileStatLabel}>Applications</Text>
          </View>
          <View style={styles.profileStatItem}>
            <Text style={styles.profileStatNumber}>8</Text>
            <Text style={styles.profileStatLabel}>Groups</Text>
          </View>
        </View>

        <View style={styles.profileActions}>
          <TouchableOpacity style={styles.profileActionButton}>
            <Icon name="edit" size={20} color="#1E90FF" />
            <Text style={styles.profileActionText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileActionButton}>
            <Icon name="settings" size={20} color="#1E90FF" />
            <Text style={styles.profileActionText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#1E90FF', '#0066CC']}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
            
              <View style={styles.headerText}>
                <Text style={styles.greeting}>Welcome back!</Text>
                <Text style={styles.userName}>Amar</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => setShowProfileMenu(true)}
            >
              <Icon name="account-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === 'home' && renderHomeContent()}
        {activeTab === 'explore' && renderExploreContent()}
        {activeTab === 'messages' && renderMessagesContent()}
        {activeTab === 'profile' && renderProfileContent()}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('home')}
        >
          <Icon name="home" size={24} color={activeTab === 'home' ? "#1E90FF" : "#999"} />
          <Text style={[styles.navLabel, { color: activeTab === 'home' ? "#1E90FF" : "#999" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('explore')}
        >
          <Icon name="search" size={24} color={activeTab === 'explore' ? "#1E90FF" : "#999"} />
          <Text style={[styles.navLabel, { color: activeTab === 'explore' ? "#1E90FF" : "#999" }]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('messages')}
        >
          <Icon name="message" size={24} color={activeTab === 'messages' ? "#1E90FF" : "#999"} />
          <Text style={[styles.navLabel, { color: activeTab === 'messages' ? "#1E90FF" : "#999" }]}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('profile')}
        >
          <Icon name="person" size={24} color={activeTab === 'profile' ? "#1E90FF" : "#999"} />
          <Text style={[styles.navLabel, { color: activeTab === 'profile' ? "#1E90FF" : "#999" }]}>Profile</Text>
        </TouchableOpacity>
      </View>


      {/* Profile Menu Modal */}
      <Modal
        visible={showProfileMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowProfileMenu(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowProfileMenu(false)}
        >
          <View style={styles.profileMenu}>
            <View style={styles.profileHeader}>
              <Icon name="account-circle" size={50} color="#1E90FF" />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Amar kumar</Text>
                <Text style={styles.profileEmail}>amar.kumar@gmail.com</Text>
              </View>
            </View>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => setShowProfileMenu(false)}>
              <Icon name="person" size={24} color="#666" />
              <Text style={styles.menuItemText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => setShowProfileMenu(false)}>
              <Icon name="settings" size={24} color="#666" />
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => setShowProfileMenu(false)}>
              <Icon name="help" size={24} color="#666" />
              <Text style={styles.menuItemText}>Help & Support</Text>
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={handleLogout}>
              <Icon name="logout" size={24} color="#FF4444" />
              <Text style={[styles.menuItemText, styles.logoutText]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  headerText: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
  profileButton: {
    padding: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: -15,
    marginBottom: 30,
  },
  statsCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  statsLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 60) / 2,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  activitiesContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activityIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F0F8FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  trendingContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  trendingCard: {
    width: 150,
    height: 100,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  trendingGradient: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  trendingSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  navLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 20,
  },
  profileMenu: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    minWidth: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutItem: {
    marginTop: 5,
  },
  logoutText: {
    color: '#FF4444',
    fontWeight: '600',
  },
  exploreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exploreCard: {
    width: (width - 60) / 2,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exploreTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  exploreSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  messagesContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  messageAvatar: {
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  unreadMessage: {
    fontWeight: '600',
    color: '#333',
  },
  unreadDot: {
    width: 8,
    height: 8,
    backgroundColor: '#1E90FF',
    borderRadius: 4,
    marginLeft: 10,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  profileStatItem: {
    alignItems: 'center',
  },
  profileStatNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  profileStatLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  profileActionText: {
    fontSize: 14,
    color: '#1E90FF',
    marginLeft: 8,
    fontWeight: '600',
  },
  profileCollege: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default HomeScreen;
