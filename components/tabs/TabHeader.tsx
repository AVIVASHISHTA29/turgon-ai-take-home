import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ThemedIcon } from "../common/ThemedIcon";
import { ThemedText } from "../common/ThemedText";
import { ThemedView } from "../common/ThemedView";

const dropdownOptions = ["Q-Gurgaon", "Option 1", "Option 2"];

export const TabHeader = () => {
  const textColor = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "borderColor");
  const backgroundColor = useThemeColor({}, "background");

  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [headerValue, setHeaderValue] = useState<string>(dropdownOptions[0]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const dropdownAnimation = useRef(new Animated.Value(0)).current;
  const searchAnimation = useRef(new Animated.Value(0)).current;

  const handleDropdownClick = () => {
    setIsSearchActive(false);
    Keyboard.dismiss(); // Hide keyboard when dropdown is clicked
    if (!isDropdownVisible) {
      setShowDropdown(true);
      Animated.timing(dropdownAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setIsDropdownVisible(true);
    } else {
      Animated.timing(dropdownAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShowDropdown(false);
        setIsDropdownVisible(false);
      });
    }
  };

  const handleSearchClick = () => {
    setIsDropdownVisible(false);
    setShowSearch(true);
    Animated.timing(searchAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsSearchActive(true);
  };

  const handleSearchBlur = () => {
    Animated.timing(searchAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowSearch(false);
      setIsSearchActive(false);
      Keyboard.dismiss(); // Ensure keyboard is hidden when search loses focus
    });
  };

  const dismissKeyboard = () => {
    if (isSearchActive) {
      handleSearchBlur();
    }
  };

  const dropdownStyle = {
    opacity: dropdownAnimation,
    transform: [
      {
        translateY: dropdownAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-10, 0],
        }),
      },
    ],
  };

  const searchStyle = {
    opacity: searchAnimation,
    transform: [
      {
        translateY: searchAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-10, 0],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView>
        <ThemedView style={styles.header}>
          {!isSearchActive ? (
            <TouchableOpacity onPress={handleDropdownClick}>
              <ThemedView
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <ThemedText type="subtitle" style={styles.headerValue}>
                  {headerValue}
                </ThemedText>
                <ThemedIcon name="chevron-down" size={18} />
              </ThemedView>
            </TouchableOpacity>
          ) : (
            <Animated.View
              style={[
                styles.searchBar,
                searchStyle,
                { backgroundColor: backgroundColor },
              ]}
            >
              {showSearch && (
                <>
                  <TextInput
                    placeholder="Search..."
                    style={[
                      styles.searchInput,
                      { color: textColor, borderColor, margin: 0 },
                    ]}
                    autoFocus
                    onBlur={handleSearchBlur}
                  />
                </>
              )}
            </Animated.View>
          )}

          {showSearch ? (
            <TouchableOpacity onPress={dismissKeyboard}>
              <ThemedIcon name="close" size={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSearchClick}>
              <ThemedIcon name="search" size={22} />
            </TouchableOpacity>
          )}
        </ThemedView>

        {showDropdown && !isSearchActive && (
          <Animated.View
            style={[
              styles.dropdown,
              dropdownStyle,
              { backgroundColor: backgroundColor },
            ]}
          >
            {dropdownOptions
              .filter((val) => val !== headerValue)
              .map((item, i) => (
                <TouchableOpacity
                  onPress={() => {
                    setHeaderValue(item);
                    handleDropdownClick();
                  }}
                  key={`dropdown-item-${i}`}
                >
                  <ThemedText style={styles.dropdownItem}>{item}</ThemedText>
                </TouchableOpacity>
              ))}
          </Animated.View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    position: "relative",
  },
  headerValue: {
    paddingVertical: 8,
    marginRight: 12,
  },
  searchBar: {
    flex: 1,
    marginRight: 16,
  },
  searchInput: {
    fontSize: 18,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  dropdown: {
    position: "absolute",
    top: 120,
    left: 8,
    padding: 10,
    borderWidth: 0,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    minWidth: 200,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 12,
  },
});
