import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Component Header (Gộp vào đây)
const Header = ({ title, onViewAll }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Màn hình Home
const Home = () => {
  const categories = [
    { id: '1', title: 'Pizza', image: 'https://tse1.mm.bing.net/th?id=OIP.Ox8Glyg3SzMCPMSGt1rFEwHaHa&pid=Api&P=0&h=180' },
    { id: '2', title: 'Burgers', image: 'https://tse2.mm.bing.net/th?id=OIP.6es4gAgZpr957EZOWQ-WNQHaFC&pid=Api&P=0&h=180' },
    { id: '3', title: 'Steak', image: 'https://tse2.mm.bing.net/th?id=OIP.ahfkaxtDnN_dLlOAAxKRnAHaE6&pid=Api&P=0&h=180' },
  ];

  const popularItems = [
    { id: '1', title: 'Phở', chef: 'By Viet Nam', price: 15, image: 'https://tse3.mm.bing.net/th?id=OIP.B02RKb6NI2CB276dKOiejAHaE7&pid=Api&P=0&h=180' },
    { id: '2', title: 'Bún chả chấm', chef: 'By Viet Nam', price: 35, image: 'https://tse3.mm.bing.net/th?id=OIP.YM5hjuYNP3yKzG2-hoXGLwHaE-&pid=Api&P=0&h=180' },
  ];

  const saleItems = [
    { id: '1', title: 'Bánh mỳ', discount: '10% OFF', image: 'https://tse3.mm.bing.net/th?id=OIP.st2C73vy7-BvGkyiZnmNwAHaGZ&pid=Api&P=0&h=180' },
    { id: '2', title: 'Bánh xèo', discount: '15% OFF', image: 'https://tse2.mm.bing.net/th?id=OIP.XRLsSQUb1mXQz0pTufpQ-QHaE8&pid=Api&P=0&h=180' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Tìm kiếm: ${searchQuery}`);
  };

  const handleFilter = () => {
    alert('Mở bộ lọc');
  };

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={{ uri: item.image }} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{item.title}</Text>
      <Text style={styles.popularChef}>{item.chef}</Text>
      <Text style={styles.popularPrice}>${item.price}</Text>
    </View>
  );

  const renderSaleItem = ({ item }) => (
    <View style={styles.saleItem}>
      <Image source={{ uri: item.image }} style={styles.saleImage} />
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for meals or area"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Top Categories */}
      <Header title="Top Categories" />
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />

      {/* Popular Items */}
      <Header title="Popular Items" onViewAll={() => alert('Xem tất cả Popular Items')} />
      <FlatList
        data={popularItems}
        renderItem={renderPopularItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />

      {/* Sale-off Items */}
      <Header title="Sale-off Items" onViewAll={() => alert('Xem tất cả Sale-off Items')} />
      <FlatList
        data={saleItems}
        renderItem={renderSaleItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  filterButton: {
    padding: 10,
  },
  filterText: {
    color: '#ff9800',
    fontSize: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#ff9800',
    fontSize: 14,
  },
  flatList: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  popularItem: {
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    width: 150,
  },
  popularImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  popularChef: {
    fontSize: 12,
    color: '#666',
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  saleItem: {
    marginRight: 15,
    position: 'relative',
  },
  saleImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Home;