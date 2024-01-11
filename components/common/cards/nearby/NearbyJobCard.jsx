import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";
import React from "react";

const NearbyJobCard = ({ job, handleNavigate }) => {
    const jobPostedDate = new Date(job?.job_posted_at_datetime_utc);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInTime = currentDate.getTime() - jobPostedDate.getTime();

    // Convert the time difference to days
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    let timeAgoText = "";

    // Decide whether to show days or weeks
    if (differenceInDays < 7 && differenceInDays > 1) {
      timeAgoText = `${differenceInDays} days ago`;
    } else if (differenceInDays > 7) {
      const differenceInWeeks = Math.ceil(differenceInDays / 7);
      timeAgoText = `${differenceInWeeks} week(s) ago`;
    } else if (differenceInDays < 2) {
        timeAgoText = `Yesterday`;
    }

   
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>
          {" "}
          {job?.employer_name}, {job?.job_country}
        </Text>
        <Text style={styles.jobName}>{timeAgoText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
