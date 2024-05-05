package sbnz.service;

import sbnz.domain.Arrangement;
import sbnz.dto.ArrangementHomepageRecommendationDTO;

import java.util.List;
import java.util.ArrayList;
import java.util.HashSet;

public class ArrangementRecommendationService {
    List<ArrangementHomepageRecommendationDTO> arrangements;

    public ArrangementRecommendationService() {
        arrangements = new ArrayList<>();
    }

    public List<ArrangementHomepageRecommendationDTO> getArrangements() {
        return arrangements;
    }

    public List<ArrangementHomepageRecommendationDTO> getArrangementsByGrade() {
        return arrangements;
    }

    public void addArrangement(Arrangement arrangement, String tag) {
        ArrangementHomepageRecommendationDTO recommendationDTO = arrangements.stream()
                                                                    .filter(recomendation -> recomendation.getArrangementDTO().getId() == arrangement.getId())
                                                                    .findFirst().orElse(null);
        if (recommendationDTO == null){
            recommendationDTO = new ArrangementHomepageRecommendationDTO(arrangement, new HashSet<String>());
            recommendationDTO.addTag(tag);
            arrangements.add(recommendationDTO);
            return;
        }
        recommendationDTO.addTag(tag);
    }

    public void removeArrangement(ArrangementHomepageRecommendationDTO arrangement) {
        arrangements.remove(arrangement);
    }

    public int getSize(){
        return arrangements.size();
    }

    public int getSizeByGrade(int grade){
        return (int) arrangements.stream()
                .filter(element -> element.getFilterGrade() == grade)
                .count();
    }

    public void countGrades() {
        for (ArrangementHomepageRecommendationDTO arr:arrangements) {
            arr.countGrade();
        }
    }

    public void removeRandomArrangement() {
        arrangements.remove(0);
    }
}
